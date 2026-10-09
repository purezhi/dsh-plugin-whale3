# 🐳 Whale3 桌宠 · Whale3 Desktop Pet

[![npm version](https://img.shields.io/npm/v/@purezhi%2Fdsh-plugin-whale3.svg)](https://www.npmjs.com/package/@purezhi%2Fdsh-plugin-whale3)

给 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 的 Web UI 加一条会动的鲸鱼桌宠。

- 🐳 **默认座头鲸**，右键循环切换 座头鲸 → 蓝鲸 → 虎鲸（双击回到第一个）
- **可拖拽定位**，在界面顶部水平来回游动，眨眼 / 双叶摆尾 / 喷水动画
- 注册在用户 profile（`~/.dsh`），**应用升级后依然存在**

## ✨ 功能

- **三种品种，独立身体轮廓**（头型/背线/腹线均不同，不是换皮）：
  - 🐳 **座头鲸**：圆鼓高背（宽高比 1.77）、明亮蓝、白色大肚皮、4 颗头部疣突、驼峰背鳍、超长胸鳍、心形宽水柱
  - 🐋 **蓝鲸**：细长子弹头（宽高比 2.75）、品牌蓝、小背鳍靠后、细长胸鳍、高细水柱
  - 🐋 **虎鲸**：梭子形、黑白配色、高大镰刀背鳍、眼斑 + 灰色马鞍斑、短宽水柱
- 顶部水平来回游动，游到边缘短暂停留后转身（始终头朝游动方向）
- **按住拖拽**到任意位置，松手后在新高度继续游
- **配置页**：在插件页面直接编辑配置（保存后即时生效）
- **随插件启停**：停用插件即移除鲸鱼

## 📦 安装

在 DSH 中打开 **设置 → 插件 → 插件市场**安装，或把它加入某个 profile 的 bundle 依赖：

```jsonc
// ~/.dsh/profiles/<profile>/package.json
{
  "dsh": { "profile": { "bundles": ["@purezhi/dsh-plugin-whale3"] } },
  "dependencies": { "@purezhi/dsh-plugin-whale3": "^1.0.0" }
}
```

**插件集变更后需要重启 DSH**（client 模块的包元数据在启动时缓存）。

## ⚙️ 配置

```yaml
# ~/.dsh/profiles/<profile>/cordis.patch.yml
- id: whale
  config:
    rightClickSwitch: true   # 右键点击是否切换形象（默认 true）
```

| 配置项 | 默认值 | 说明 |
|---|---|---|
| `rightClickSwitch` | `true` | 设为 `false` 时右键不再切换形象，右键事件交还浏览器（可在插件页面直接修改，保存后即时生效） |

## 🔌 生命周期

鲸鱼 DOM、样式与动画循环都归属同一个 `ctx.effect`：插件被停用/卸载（含热重载）时一并释放，
重新启用可干净重挂载。

## 📜 致谢与声明

以 MIT 协议发布。

## ⚖️ License

MIT
