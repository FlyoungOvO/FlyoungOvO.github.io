# Notes Features Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为学习笔记型博客补齐搜索、KaTeX、更新时间和导航入口，并验证这些能力已在生成站点中生效。

**Architecture:** 通过 Hugo 配置打开 PaperMod 已有能力，并在站点自己的 `layouts/partials` 下覆盖主题扩展点来注入 KaTeX 和更新时间展示，不修改主题源码。验证使用构建后的 HTML 检查，先证明缺失，再证明修复。

**Tech Stack:** Hugo, PaperMod, TOML, Hugo templates, KaTeX CDN

---

### Task 1: 为搜索和知识导航补齐站点配置

**Files:**
- Modify: `/Users/flyoung/LLM/FlyoungBlog/hugo.toml`
- Create: `/Users/flyoung/LLM/FlyoungBlog/content/search.md`

**Step 1: 写失败检查**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && find /Users/flyoung/LLM/FlyoungBlog/public -maxdepth 2 -type f | rg '/search/'`
Expected: 无结果，证明搜索页尚未生成

**Step 2: 写最小实现**

- 在导航增加 `Search`、`Tags`、`Categories`
- 新增 `content/search.md`，使用 `layout = "search"`

**Step 3: 重新构建验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && find /Users/flyoung/LLM/FlyoungBlog/public -maxdepth 2 -type f | rg '/search/'`
Expected: 出现 `public/search/index.html`

### Task 2: 为文章增加 KaTeX 与更新时间

**Files:**
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/extend_head.html`
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/extend_footer.html`
- Create: `/Users/flyoung/LLM/FlyoungBlog/layouts/partials/post_meta.html`
- Modify: `/Users/flyoung/LLM/FlyoungBlog/content/posts/hello-world.md`

**Step 1: 写失败检查**

Run: `rg -n "katex|最后更新" /Users/flyoung/LLM/FlyoungBlog/public -g '*.html'`
Expected: 无结果，证明当前未展示

**Step 2: 写最小实现**

- 通过站点 partial 注入 KaTeX CSS/JS 和自动渲染脚本
- 覆盖 `post_meta.html`，在 `lastmod` 与 `date` 不同时显示更新时间
- 给示例文章增加 `math = true`、`lastmod` 和公式内容

**Step 3: 重新构建验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify && rg -n "katex|最后更新" /Users/flyoung/LLM/FlyoungBlog/public -g '*.html'`
Expected: 能命中文章页中的 KaTeX 资源与更新时间文本

### Task 3: 最终验证与交付

**Files:**
- Modify: `/Users/flyoung/LLM/FlyoungBlog/README.md`

**Step 1: 更新 README**

补充搜索、公式和更新时间的使用说明。

**Step 2: 全量验证**

Run: `hugo --source /Users/flyoung/LLM/FlyoungBlog --minify`
Expected: 构建成功

**Step 3: Commit**

```bash
git add .
git commit -m "feat: add note-friendly blog features"
```
