# Notes Features Design

## Goal
为现有 Hugo + PaperMod 博客补齐学习笔记型博客的关键能力：全文搜索、标签与分类入口、目录导航、代码高亮、KaTeX 数学公式、暗色模式和文章更新时间展示。

## Decision
- 保持 `PaperMod` 作为主题，不修改主题源码。
- 通过站点级配置和本地 `layouts/partials` 覆盖来扩展功能。
- 搜索采用 `PaperMod` 内置 Fuse.js 搜索页。
- 数学公式采用 `KaTeX` 自动渲染。
- 更新时间通过覆盖 `post_meta.html` 展示 `lastmod`。

## Scope
- 修改站点配置与导航
- 新增 `search.md`
- 新增 `extend_head.html` 与 `extend_footer.html`
- 覆盖 `post_meta.html`
- 更新示例文章以验证 `lastmod` 与数学公式
