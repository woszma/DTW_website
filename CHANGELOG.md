# 更新日志 (Changelog)

所有项目的重要变更都将记录在本文档中。

## [0.2.1] - 2026-02-28
### 修復 (Fixed)
- 修復了 `/#admin` 路由失效的問題（移除了模塊化腳本中對 `DOMContentLoaded` 依賴並添加了 URL Hash 改變的實時監聽事件，解決了瀏覽器生命週期導致的加載失敗問題）。

## [0.2.0] - 2024-05-22
### 新增 (Added)
- 全站通用 Header 恢复，支持作品与设计分类切换。 (Restored universal Header with category switching.)
- 实现首页背景视频自动轮播功能（5 秒间隔）。 (Implemented 5s auto-carousel for background videos.)
- 首页主标题文案更新为 `SELECTED WORKS - FAMILY MOMENT`。 (Updated Home hero title.)

### 变更 (Changed)
- Logo 由文字替换为 `DTW logo_WHITE.png`，并适配了浅色背景。 (Replaced text Logo with image Logo and adapted for light backgrounds.)
