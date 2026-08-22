# Changelog

本项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/) 与
[Semantic Versioning](https://semver.org/lang/zh-CN/)。

## [1.0.0] - 2026-08-22

### 新增

- 三个鲸鱼品种,右键循环切换,默认显示座头鲸(双击回到第一个):
  - 座头鲸:圆鼓高背、emoji 明亮蓝、疣突、超长胸鳍、心形喷水
  - 蓝鲸:细长子弹头、DeepSeek 品牌蓝 `#4D6BFE`、高细水柱
  - 虎鲸:梭子形、黑白配色、高大镰刀背鳍、眼斑 + 马鞍斑
- 每种品种独立身体轮廓(头型/背线/腹线),非换皮
- 顶部水平来回游动,游到边缘短暂停留后转身(始终头朝游动方向)
- 按住拖拽移动位置,松手后在新水平高度来回游
- 身体浮动、双叶摆尾、鱼鳍摆动、眨眼、喷水动画
- 尊重系统 `prefers-reduced-motion`

### 工程

- 源码优先布局:`lib/client.src.js`(真源)→ `build.js` → `lib/client.js`(产物)
- `install.sh` / `uninstall.sh` 一键安装/卸载,注册到 desktop + web profile
- 注册在 `~/.dsh` 用户配置,应用升级后依然存在
