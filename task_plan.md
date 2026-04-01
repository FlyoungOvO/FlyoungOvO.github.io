# Task Plan

## Goal
在保留 Hugo 内容系统和现有博客功能的前提下，重做视觉层，使博客首页、列表页、文章详情页呈现出参考 Claude Blog 的编辑型设计语言，并加入适合个人博客的 Grid/List 视图切换与筛选浏览体验。

## Phases
- [completed] 1. 固化设计方案与实现计划
- [completed] 2. 重做首页与文章列表模板
- [completed] 3. 重做文章详情页模板与排版
- [completed] 4. 新增站点样式与交互脚本
- [completed] 5. 本地验证、提交并部署

## Errors Encountered
| Error | Attempt | Resolution |
|---|---:|---|
| 数学公式脚本曾受 footer 缓存影响 | 1 | 已改为在 head 层稳定注入 |
| 第二轮精修后首页与控件背景风格不统一 | 1 | 已统一为更接近 Claude blog 的暖白底，并同步控件底色 |
| `search/tags/categories/archives` 仅颜色统一但结构未统一 | 1 | 已新增独立模板，统一为 editorial browser 结构 |
