# DTW Website

基于 Vue 3 和 Vite 构建的作品集网站 (Portfolio Website)。

## 项目背景 (Project Background)
本项目是一个展示摄影与设计作品的个人作品集网站。它采用了一种自定义的 **MVVM (Model-View-ViewModel)** 架构模式：
- **Model**: 定义在 `src/models/`，用于数据结构的定义。
- **ViewModel**: 定义在 `src/viewmodels/`，负责业务逻辑、状态管理以及视图更新的通知。
- **View**: 定义在 `src/views/`，使用 JavaScript 模板字符串定义 HTML 结构，并通过 ViewModel 的订阅机制进行渲染。

## 核心技术栈 (Tech Stack)
- **Frontend**: Vue 3 (Composition API style but largely manual DOM manipulation in views)
- **Build Tool**: Vite
- **Architecture**: MVVM

## 目录结构 (Directory Structure)
- `src/models/`: 数据模型 (Data Models)
- `src/viewmodels/`: 视图模型 (ViewModels)
- `src/views/`: 视图组件 (Views as JS templates)
- `src/styles/`: 全局与组件样式 (Styles)
- `public/`: 静态资源 (Static Assets)
