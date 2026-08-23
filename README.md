# 🐳 DSH UI 鲸鱼插件

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![npm version](https://img.shields.io/npm/v/@purezhi%2Fdsh-plugin-whale3.svg)](https://www.npmjs.com/package/@purezhi%2Fdsh-plugin-whale3)
[![Node](https://img.shields.io/badge/node-%5E22.19%20%7C%20%3E%3D24-blue)](package.json)

给 DeepSeek Harness (DSH) 的 Web UI 加一条会动的鲸鱼桌宠:

- 🐳 **默认显示座头鲸**,右键循环切换 🐳 座头鲸 → 🐋 蓝鲸 → 🐋 虎鲸(双击回到第一个)
- **可拖拽定位**,顶部水平来回游动,眨眼 / 双叶摆尾 / 喷水动画
- 注册在 `~/.dsh`(用户配置),**应用升级后依然存在**

## ✨ 功能

- **三种品种,独立身体轮廓**(头型/背线/腹线均不同,不是换皮):
  - 🐳 **座头鲸**:圆鼓高背(宽高比 1.77)、emoji 明亮蓝 `#5b8cff`、白色大肚皮、大眼睛萌态、4 颗头部疣突、驼峰背鳍、超长胸鳍(身体 1/3)、心形宽水柱
  - 🐋 **蓝鲸**:细长子弹头(宽高比 2.75)、DeepSeek 品牌蓝 `#4D6BFE`、小背鳍靠后、细长胸鳍、高细水柱
  - 🐋 **虎鲸**:梭子形(宽高比 2.29,吻部尖细)、黑白配色、高大镰刀背鳍、眼斑 + 灰色马鞍斑、白腹延伸、短宽水柱
- 顶部水平来回游动,游到边缘短暂停留后转身(**始终头朝游动方向**)
- **按住拖拽**移动到任意位置,松手后在新水平高度来回游
- 身体浮动、双叶摆尾、鱼鳍摆动、眨眼、喷水动画
- 尊重系统 `prefers-reduced-motion`(减弱动画时全部停用)

## 📦 安装

```bash
cd whale
chmod +x install.sh uninstall.sh
./install.sh
```

脚本自动完成:
1. 拷贝插件包到 `~/.dsh/profiles/node_modules/@purezhi/dsh-plugin-whale3/`
2. 注册到 `~/.dsh/profiles/desktop/cordis.patch.yml` 与 `web/cordis.patch.yml`
3. 给 web profile 建符号链接

**然后重启 DSH Desktop**(或重新运行 `dsh web`)。插件集变更需要重启,client-modules 的包元数据缓存设计。

## 🛠 开发工作流(保持代码最新)

工作区**不生效**,是源码仓库;改代码 → 构建 → 安装三步:

```bash
# 1. 改源码(唯一真源)
#    vim dsh-plugin-whale3/lib/client.src.js

# 2. 构建产物
node dsh-plugin-whale3/build.js

# 3. 安装生效(若 src 比产物新,install.sh 会提示先 build)
./install.sh
```

## 📁 文件结构

```
whale/
├── LICENSE / README.md / .gitignore
├── install.sh / uninstall.sh
└── dsh-plugin-whale3/
    ├── package.json        # 声明 dsh.client (platform: web), 导出 ./client
    ├── build.js            # 构建脚本:lib/client.src.js → lib/client.js
    └── lib/
        ├── index.js        # node 端空插件(让插件出现在 Loader)
        ├── client.src.js   # 浏览器端源码(唯一真源)
        └── client.js       # 构建产物(ModuleLoader bundle)
```

## 🗑 卸载

```bash
cd whale
./uninstall.sh
```

或手动删除 `~/.dsh/profiles/node_modules/@purezhi/dsh-plugin-whale3/` + 移除 cordis.patch.yml 里的 whale 注册段。

## 📦 发布到 npm(可选)

```bash
cd dsh-plugin-whale3
npm publish   # 需要先改 package.json 的 name 为你自己的包名
```

`files` 字段已限定发布内容(`lib/`、`build.js`、`README.md`、`LICENSE`),`prepare` 会在发布前自动运行构建。接收方安装到 profile 后同样在 cordis.patch.yml 注册即可。

## 📜 致谢与声明

- 身体轮廓与配色参考真实鲸鱼形态;DeepSeek 品牌蓝 `#4D6BFE` 取自 DeepSeek logo 品牌色
- 本项目为独立开源实现,与 DeepSeek / DeepSeek Harness 无隶属关系

## ⚖️ License

[MIT](LICENSE)

## 📦 已收录

本插件已提交到 **DSH 1024Store**(官方主目录):

- PR: https://github.com/imsai-sh/awesome-deepseek-harness-plugins/pull/179(已合并)
- 收录后自动同步到 deepseek1024.com 与市场内置的 1024Store 来源
- 仓库带 `dsh-plugin` topic,同时会被 dshfind.com 每日同步收录(仅浏览)
