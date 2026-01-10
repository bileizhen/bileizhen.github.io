<img src="./docs/images/1131.png" width="405" height="511" alt="Cyrene" align="right" />

<div align="center">

# Cyrene
> 一款清新美观的 Astro 博客主题模板
> 
> ![Node.js >= 20](https://img.shields.io/badge/node.js-%3E%3D20-brightgreen) 
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-5.16.5-orange)
![GitHub License](https://img.shields.io/badge/license-MIT-blue)
</div>

---

🚀 快速指南：
[**📝 使用文档**](https://docs-firefly.cuteleaf.cn/) /
[**🍀 我的博客**](https://qwc-ch.github.io) 

📖 README：
**[简体中文](README.md)**

⚡ 静态站点生成：基于 Astro 的超快加载速度和 SEO 优化

🎨 现代化设计：简洁美观的界面，支持自定义主题色

📱 移动友好：完美的响应式体验，移动端专项优化

🔧 高度可配置：大部分功能模块均可通过配置文件自定义

## ✨ 核心功能

Cyrene 由 **Firefly** 开发而来，在核心功能层面，两者保持高度一致，确保您能获得同样成熟、完善的博客体验，故不在此重复列举。（对比Firefly更改看板娘模型和新增一个音乐播放器现为双音乐播放器）

您可查阅 [Firefly 仓库](https://github.com/CuteLeaf/Firefly) 了解详细特性（仅为参考）。

## 📝 计划中...

- [ ] **更换看板娘模型**
- [ ] 更多功能持续完善中...

如果你有好用的功能和优化，请提交 [Pull Request](https://github.com/qwc-ch/Cyrene/pulls)

## 🚀 快速开始

### 环境要求

- Node.js >= 20
- pnpm >= 8

### 本地开发部署

1. **克隆仓库：**
```bash
git clone https://github.com/qwc-ch/Cyrene.git
cd Cyrene
```
**先 [Fork](https://github.com/qwc-ch/Cyrene/fork) 到自己仓库再克隆（推荐,想把博客布署到github的话要把仓库名改为"用户名.github.io"）**
```bash
git clone https://github.com/you-github-name/Cyrene.git
cd Cyrene
``` 
2. **安装依赖：**
```bash
# 如果没有安装 pnpm，先安装
npm install -g pnpm

# 安装项目依赖
pnpm install
```
3. **配置博客：**
- 编辑 `src/config/` 目录下的配置文件自定义博客设置
4. **启动开发服务器：**
```bash
pnpm dev
```
  博客将在 `http://localhost:4321` 可用
  
- **参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages, Cloudflare Pages, EdgeOne Pages 等。**
   框架预设： `Astro`
   根目录： `./`
   输出目录： `dist`
   构建命令： `pnpm run build`
   安装命令： `pnpm install`
   
## 📖 配置说明
> 📚 **详细配置文档**: 请查看（仅为参考） [Firefly使用文档](https://docs-firefly.cuteleaf.cn/)


 ### 设置网站语言
要设置博客的默认语言，请编辑 `src/config/siteConfig.ts` 文件：
```typescript
// 定义站点语言
const SITE_LANG = "zh_CN";
```
**支持的语言代码：**
- `zh_CN` - 简体中文
- `zh_TW` - 繁体中文
- `en` - 英文
- `ja` - 日文
- `ru` - 俄文

### 配置文件结构
```
src/
 |  |── config/
│├── index.ts# 配置索引文件
│├── siteConfig.ts# 站点基础配置
│├── profileConfig.ts# 用户资料配置
│├── commentConfig.ts# 评论系统配置
│├── announcementConfig.ts # 公告配置
│├── licenseConfig.ts# 许可证配置
│├── footerConfig.ts# 页脚配置
│├── FooterConfig.html# 页脚HTML内容
│├── expressiveCodeConfig.ts # 代码高亮配置
│├── sakuraConfig.ts# 樱花特效配置
│├── fontConfig.ts# 字体配置
│├── sidebarConfig.ts# 侧边栏布局配置
│├── navBarConfig.ts# 导航栏配置
│├── musicConfig.ts# 音乐播放器配置
│├── pioConfig.ts# 看板娘配置
├── adConfig.ts# 广告配置
│├── friendsConfig.ts# 友链配置
│├── sponsorConfig.ts      # 赞助配置
│└── coverImageConfig.ts  # 文章封面图配置
```

## ⚙️ 文章 Frontmatter
```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg # 或使用 "api" 来启用随机封面图 或使用网络图片
tags: [Foo, Bar]
category: Front-end
draft: false
lang: zh-CN # 仅当文章语言与 `siteConfig.ts` 中的网站语言不同时需要设置
---
```

| Command | Action |
| :--- | :--- |
| `pnpm install` | 安装项目依赖 |
| `pnpm add sharp` | 安装 Sharp 图像处理库（用于图片优化） |
| `pnpm dev` | 在 `localhost:4321` 启动本地开发服务器 |
| `pnpm build` | 构建网站至 `./dist/` 目录 |
| `pnpm preview` | 本地预览已构建的网站 |
| `pnpm new-post <filename>` | 创建一篇新文章 |
| `pnpm astro ...` | 执行 `astro add`, `astro check` 等 Astro 指令 |
| `pnpm astro --help` | 显示 Astro CLI 帮助信息 |
## 🙏 致谢
- 非常感谢 [CuteLeaf](https://github.com/CuteLeaf) 开发的 [Firefly](https://github.com/CuteLeaf/Firefly) 模板，Cyrene 就是基于这个模板二次开发
- 同时也感谢 [saicaca](https://github.com/saicaca) 开发了 [Fuwari](https://github.com/saicaca/fuwari) 模板，为后续许多优秀项目奠定了坚实基础。
- 感谢 [matsuzaka-yuki](matsuzaka-yuki) 模板,Cyrene 用了此项目的音乐播放器
- 图标来自 [Iconify](https://iconify.design/)
- 昔涟部分相关图片素材版权归游戏 [《崩坏：星穹铁道》](https://sr.mihoyo.com/) 开发商 [米哈游](https://www.mihoyo.com/) 所有
## 📝 许可协议
本项目遵循 [MIT license](https://mit-license.org/) 开源协议，详细查看 [LICENSE](./LICENSE) 文件，
最初 Fork 自 [CuteLeaf](https://github.com/CuteLeaf/Firefly)，感谢原作者的贡献，原项目采用 [MIT license](https://mit-license.org/)。
## ⭐ Star History
[![Star History Chart](https://api.star-history.com/svg?repos=qwc-ch/Cyrene&type=Date)](https://star-history.com/#qwc-ch/Cyrene&Date)
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
