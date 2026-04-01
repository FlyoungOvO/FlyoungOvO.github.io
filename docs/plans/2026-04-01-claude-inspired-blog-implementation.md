# Claude-Inspired Blog Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 把博客重构为参考 Claude Blog 的个人博客视觉系统，并实现首页/列表页统一浏览界面、Grid/List 切换、筛选区和更强的文章阅读排版。

**Architecture:** 保留 Hugo 与 PaperMod 主题作为底层内容系统，但在站点级别重写首页、列表页、文章页模板，并通过 `assets/css/extended/*.css` 和少量原生 JS 建立新的设计系统与浏览交互。搜索、标签、分类、代码高亮、KaTeX 和更新时间继续复用现有能力。

**Tech Stack:** Hugo, PaperMod, Hugo templates, CSS, vanilla JavaScript

---

### Task 1: 重建首页与文章浏览模板

**Files:**
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/index.html`
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/_default/list.html`
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/editorial_post_card.html`
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/blog_browser_controls.html`

**Step 1: 写失败检查**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "Filter and sort|Grid|List|Search posts" /Users/flyoung/LLM/FlyoungBlog/public/index.html`
Expected: 无结果

**Step 2: 写最小实现**

- 首页展示 Hero + 浏览界面
- 列表页与首页共享同一浏览界面
- 卡片支持大封面区与编辑型文案布局

**Step 3: 重新构建验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "Filter and sort|Grid|List|Search posts" /Users/flyoung/LLM/FlyoungBlog/public/index.html`
Expected: 命中新增界面文案

### Task 2: 重做文章详情页排版

**Files:**
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/_default/single.html`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/post_meta.html`

**Step 1: 写失败检查**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "post-hero|editorial-article" /Users/flyoung/LLM/FlyoungBlog/public/posts/hello-world/index.html`
Expected: 无结果

**Step 2: 写最小实现**

- 标题区重排
- 元信息和标签视觉强化
- 正文排版与目录样式统一

**Step 3: 重新构建验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "post-hero|editorial-article" /Users/flyoung/LLM/FlyoungBlog/public/posts/hello-world/index.html`
Expected: 命中新结构类名

### Task 3: 建立设计系统样式与交互

**Files:**
- Create: `/Users/flyoung/LLM/FlyoungBlog/assets/css/extended/editorial-theme.css`
- Create: `/Users/flyoung/LLM/FlyoungBlog/assets/js/blog-browser.js`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/extend_head.html`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/extend_footer.html`

**Step 1: 写失败检查**

Run: `rg -n "browser-mode-toggle|editorial-shell|blog-browser" /Users/flyoung/LLM/FlyoungBlog/public -g '*.html'`
Expected: 还不存在

**Step 2: 写最小实现**

- 建立 Claude 风格参考下的色彩、圆角、排版和卡片系统
- 实现 Grid/List 切换与客户端筛选交互
- 确保移动端仍可用

**Step 3: 重新构建验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "browser-mode-toggle|editorial-shell|blog-browser" /Users/flyoung/LLM/FlyoungBlog/public -g '*.html'`
Expected: 命中新增结构

### Task 4: 验证与交付

**Files:**
- Modify: `/Users/flyoung/LLM/FlyoungBlog/README.md`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/task_plan.md`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/findings.md`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/progress.md`

**Step 1: 记录使用方式**

补充如何使用筛选、视图切换，以及未来如何给文章加封面/分类。

**Step 2: 全量验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify`
Expected: 构建成功

**Step 3: Commit**

```bash
git add .
git commit -m "feat: redesign blog with editorial browsing layout"
```
