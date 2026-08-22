# DSH UI 鲸鱼动画

给 DSH 的 Web UI 加一条会动的鲸鱼:默认显示**座头鲸**,右键循环切换 🐳 座头鲸 → 🐋 蓝鲸 → 🐋 虎鲸;可拖拽定位,顶部来回游动,眨眼/摆尾/喷水动画。

注册在 `~/.dsh`(用户配置),**应用升级后依然存在**。

## 目录结构(参照 dsh-plugin-confirmo)

```
whale/
├── dsh-plugin-whale/          # 插件包源码(工作区,不生效)
│   ├── package.json           # 声明 dsh.client(platform: web)
│   ├── build.js               # 构建脚本:lib/client.src.js → lib/client.js
│   └── lib/
│       ├── client.src.js      # 浏览器端源码(唯一真源,改这里)
│       ├── client.js          # 构建产物(install 时拷贝到 ~/.dsh)
│       └── index.js           # node 端空插件
├── install.sh                 # 一键安装(拷贝插件到 ~/.dsh 并注册)
├── uninstall.sh               # 一键卸载
├── README.md                  # 本文档
└── archive/                   # 旧方案(dist 注入)备份,已弃用
```

**工作区不生效**:工作区的 `dsh-plugin-whale/` 只是代码仓库;只有运行 `install.sh` 才会把插件安装到 `~/.dsh/profiles/node_modules/` 并注册生效。

## 开发工作流(保持代码最新)

1. **改源码**:编辑 `dsh-plugin-whale/lib/client.src.js`(这是唯一真源)
2. **构建产物**:`node dsh-plugin-whale/build.js`(生成 `lib/client.js`)
3. **安装生效**:`./install.sh`(拷贝到 `~/.dsh` 并注册,若 src 比产物新会提示先 build)
4. **重启 DSH Desktop**(插件集变更需重启生效)

## 安装(给别人)

```bash
cd whale
chmod +x install.sh uninstall.sh
./install.sh
```

脚本自动完成:
1. 拷贝插件包到 `~/.dsh/profiles/node_modules/dsh-plugin-whale/`
2. 注册到 `~/.dsh/profiles/desktop/cordis.patch.yml` 与 `web/cordis.patch.yml`
3. 给 web profile 建符号链接

然后**重启 DSH Desktop**(或重新运行 `dsh web`)即可看到鲸鱼。

## 鲸鱼功能

- **默认显示座头鲸**,右键循环切换(双击回到第一个):🐳 座头鲸 → 🐋 蓝鲸 → 🐋 虎鲸
- 三种品种各有**独立身体轮廓**(头型/背线/腹线均不同):
  - 🐳 座头鲸:圆鼓高背(宽高比 1.77)、emoji 明亮蓝 #5b8cff、白色大肚皮、大眼睛萌态、4 颗头部疣突、驼峰背鳍、超长胸鳍(身体 1/3)、心形宽水柱
  - 🐋 蓝鲸:细长子弹头(宽高比 2.75,背腹近平行、头钝圆宽)、DeepSeek 品牌蓝 #4D6BFE、小背鳍靠后、细长胸鳍、高细水柱
  - 🐋 虎鲸:梭子形(宽高比 2.29,吻部尖细、中间粗两端细)、黑白、高大镰刀背鳍、眼斑+灰色马鞍斑、白腹延伸、短宽水柱
- 顶部水平来回游动,游到边缘短暂停留后转身(始终头朝游动方向)
- **按住拖拽**移动到任意位置,松手后在新水平高度来回游
- 身体浮动、双叶摆尾、鱼鳍摆动、眨眼、喷水动画
- 尊重系统 `prefers-reduced-motion`(减弱动画时全部停用)

## 卸载

```bash
./uninstall.sh
```

或手动删除 `~/.dsh/profiles/node_modules/dsh-plugin-whale/` + 移除 cordis.patch.yml 里的 whale 注册段。

## 发布到 npm(可选)

把 `dsh-plugin-whale/` 作为独立包发布(`npm publish` 前改 package.json 的 name/repository),接收方安装到 profile 后同样在 cordis.patch.yml 注册即可。
