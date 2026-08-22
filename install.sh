#!/usr/bin/env bash
# ============================================================================
# DSH Whale Plugin - 一键安装脚本
# 给 DeepSeek Harness (DSH) 的 Web UI 加一条会动的鲸鱼:
#   - 默认显示座头鲸,右键循环切换:🐳 座头鲸 → 🐋 蓝鲸 → 🐋 虎鲸
#   - 可拖拽定位,顶部来回游动,眨眼/摆尾/喷水动画
#   - 注册在 ~/.dsh(用户配置),应用升级后依然存在
# ============================================================================
set -euo pipefail

# --- 1. 定位本脚本所在目录(插件包根) --------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PKG_DIR="$SCRIPT_DIR/@purezhi/dsh-plugin-whale3"
DSH_HOME="${DSH_HOME:-$HOME/.dsh}"

echo "=============================================="
echo " DSH Whale Plugin 安装"
echo "=============================================="

# --- 2. 检查插件包是否完整;若缺少构建产物,先运行 build.js ---------------
if [ ! -f "$PKG_DIR/package.json" ]; then
  echo "✗ 错误: 找不到插件包, 请确认本脚本与 @purezhi/dsh-plugin-whale3/ 在同一目录"
  exit 1
fi
if [ ! -f "$PKG_DIR/lib/client.js" ]; then
  echo "✗ 缺少构建产物 lib/client.js, 先运行: node @purezhi/dsh-plugin-whale3/build.js"
  echo "  (源码在 lib/client.src.js, build.js 会生成 lib/client.js)"
  exit 1
fi
# 若源码比产物新,提醒重新构建
if [ -f "$PKG_DIR/lib/client.src.js" ] && [ "$PKG_DIR/lib/client.src.js" -nt "$PKG_DIR/lib/client.js" ]; then
  echo "⚠ 提示: lib/client.src.js 比 lib/client.js 新, 建议先运行: node @purezhi/dsh-plugin-whale3/build.js"
fi

# --- 3. 检查 DSH 主目录 ----------------------------------------------------
if [ ! -d "$DSH_HOME" ]; then
  echo "✗ 错误: 未找到 DSH 主目录 ($DSH_HOME)。请先安装/运行一次 DSH。"
  exit 1
fi
echo "✓ DSH 主目录: $DSH_HOME"

# --- 4. 拷贝插件到 profiles 共享 node_modules ------------------------------
SHARED_NM="$DSH_HOME/profiles/node_modules"
TARGET="$SHARED_NM/@purezhi/dsh-plugin-whale3"
mkdir -p "$SHARED_NM/@purezhi"
rm -rf "$TARGET"
cp -R "$PKG_DIR" "$TARGET"
echo "✓ 插件包已安装: $TARGET"

# --- 5. 注册到 desktop / web profile ---------------------------------------
patch_file() {
  local profile="$1"
  local patch="$DSH_HOME/profiles/$profile/cordis.patch.yml"
  if [ ! -f "$patch" ]; then
    echo "  (跳过 $profile: 无 cordis.patch.yml)"
    return
  fi
  if grep -q "@purezhi/dsh-plugin-whale3" "$patch" 2>/dev/null; then
    echo "  ($profile 已注册, 跳过)"
    return
  fi
  cat >> "$patch" <<EOF

# Whale companion plugin: a client-only UI plugin (empty node apply) whose
# browser half is discovered via the package.json dshClient declaration.
- insert:
    - id: whale
      name: "@purezhi/dsh-plugin-whale3"
EOF
  echo "  ✓ 已注册到 $profile"
}

# web profile 需要插件链接(desktop 走共享目录即可)
link_web() {
  local web_nm="$DSH_HOME/profiles/web/node_modules"
  if [ -d "$DSH_HOME/profiles/web" ] && [ ! -e "$web_nm/@purezhi/dsh-plugin-whale3" ]; then
    mkdir -p "$web_nm/@purezhi"
    ln -sfn "$TARGET" "$web_nm/@purezhi/dsh-plugin-whale3"
    echo "  ✓ 已链接到 web profile"
  fi
}

echo "注册插件..."
patch_file "desktop"
patch_file "web"
link_web

# --- 6. 完成 ---------------------------------------------------------------
echo ""
echo "=============================================="
echo " ✓ 安装完成!"
echo ""
echo " 使用方法:"
echo "   1. 重启 DSH Desktop(或重新运行 dsh web)"
echo "   2. 界面上会出现游动的鲸鱼"
echo "   3. 右键鲸鱼切换品种(座头鲸/蓝鲸/虎鲸)"
echo "   4. 按住鲸鱼拖拽可移动位置"
echo ""
echo " 卸载: 运行 uninstall.sh 或手动删除:"
echo "   rm -rf $TARGET"
echo "   并移除 cordis.patch.yml 里的 whale 注册段"
echo "=============================================="
