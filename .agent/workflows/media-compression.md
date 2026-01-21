---
description: 上傳大型媒體檔案前嘅壓縮流程
---

# 媒體壓縮 Workflow

當你需要上傳新嘅作品影片或圖片到 Firebase 時，如果檔案太大 (建議 > 5MB)，請先跟隨呢個流程進行壓縮。

## 🛠️ 準備工具
確保你嘅電腦已經安裝咗 `ffmpeg`。你可以在 Terminal 執行：
```bash
ffmpeg -version
```

## 🎞️ 影片壓縮流程
使用以下指令可以喺保持畫質嘅情況下，大幅減少影片體積。

// turbo
1. 執行壓縮指令：
```bash
ffmpeg -i "你的原始影片路徑.mp4" -vcodec libx264 -crf 28 -preset faster -an "壓縮後影片名稱.mp4"
```
> [!TIP]
> - `-crf 28`: 數值越大壓縮率越高 (建議 24-30)。
> - `-an`: 移除音軌 (如果作品集影片唔需要聲，可以大幅減少 Size)。

2. 檢查壓縮後體積，確認無誤後再到 Admin 後台進行上傳。

## 🖼️ 圖片壓縮流程
// turbo
1. 如果係大型圖片，可以使用以下指令轉換並壓縮：
```bash
ffmpeg -i "原始圖片.jpg" -qscale:v 2 "壓縮後圖片.jpg"
```

## ✅ 完成後
壓縮完成後，請到 Admin Dashboard (`#admin`) 選取已壓縮嘅檔案進行上傳。
