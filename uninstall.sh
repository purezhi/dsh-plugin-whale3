#!/usr/bin/env bash
# ============================================================================
# DSH Whale Plugin - 一键卸载脚本
# ============================================================================
set -euo pipefail

DSH_HOME="${DSH_HOME:-$HOME/.dsh}"
SHARED_NM="$DSH_HOME/profiles/node_modules"
TARGET="$SHARED_NM/dsh-plugin-whale"

echo "卸载 DSH Whale Plugin..."

# 1. 删除插件包
if [ -d "$TARGET" ]; then
  rm -rf "$TARGET"
  echo "✓ 已删除插件包: $TARGET"
else
  echo "  (插件包不存在)"
fi

# 2. 删除 web profile 链接
WEB_LINK="$DSH_HOME/profiles/web/node_modules/dsh-plugin-whale"
if [ -L "$WEB_LINK" ]; then
  rm -f "$WEB_LINK"
  echo "✓ 已删除 web profile 链接"
fi

# 3. 从 cordis.patch.yml 移除注册段
for profile in desktop web; do
  patch="$DSH_HOME/profiles/$profile/cordis.patch.yml"
  [ -f "$patch" ] || continue
  if grep -q "dsh-plugin-whale" "$patch" 2>/dev/null; then
    # 移除从 "Whale companion plugin" 注释到包含 dsh-plugin-whale 的 insert 行
    perl -0pi -e 's/\n*# Whale companion plugin:.*?- insert:\n    - id: whale\n      name: dsh-plugin-whale\n*//s' "$patch"
    echo "✓ 已从 $profile 的 cordis.patch.yml 移除注册"
  fi
done

echo ""
echo "完成。重启 DSH Desktop 后鲸鱼将消失。"
