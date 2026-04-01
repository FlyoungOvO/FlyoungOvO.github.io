# Flyoung Blog

这是我的个人博客，基于 Hugo 和 PaperMod 构建，并通过 GitHub Pages 自动部署。

当前已支持：

- 全文搜索
- 标签与分类
- 文章目录导航
- 代码高亮
- KaTeX 数学公式
- 暗色模式
- 文章更新时间展示

## 本地运行

```bash
hugo server
```

访问 `http://localhost:1313/` 查看本地站点。

## 新建文章

```bash
hugo new content posts/my-post.md
```

然后编辑 `content/posts/my-post.md`，将 `draft = false` 后即可发布。

如果文章包含数学公式，可在 front matter 中加入：

```toml
math = true
lastmod = 2026-04-01T15:45:00+08:00
```

然后正文里直接写：

```md
$E = mc^2$

$$
\text{softmax}(x_i)=\frac{e^{x_i}}{\sum_j e^{x_j}}
$$
```

## 构建

```bash
hugo --gc --minify
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
