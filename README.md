# Flyoung Blog

这是我的个人博客，基于 Hugo 和 PaperMod 构建，并通过 GitHub Pages 自动部署。

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

## 构建

```bash
hugo --gc --minify
```

## 部署

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
