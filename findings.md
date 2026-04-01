# Findings

## 2026-04-01
- 当前博客仍以 `PaperMod` 默认模板为主，视觉改造空间集中在自定义 `layouts` 与 `assets/css/extended/*.css`。
- `PaperMod` 支持通过站点自己的 `layouts/partials` 覆盖主题 partial，也支持通过 `assets/css/extended/*.css` 在主题样式之后注入自定义 CSS。
- 用户要的是“个人博客版本”的 Claude Blog 风格，不是像素级复制。
- 重点参考点包括：暖白背景、编辑感排版、大圆角卡片、Grid/List 切换、搜索与筛选同屏布局。
- 已通过站点级模板完成首页、列表页与文章详情页的结构重写。
- 已新增客户端 Grid/List 切换、搜索、按分类/标签/年份筛选、排序交互。
- 已选用 `Newsreader` + `Instrument Sans` 作为接近编辑出版物气质的免费字体组合。
