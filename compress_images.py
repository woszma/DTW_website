import os
import subprocess

TARGET_DIR = 'public/images'
MAX_SIZE = 2560 # 最大寬度或高度
QUALITY = 80 # JPEG 品質

def compress_image(file_path):
    ext = os.path.splitext(file_path)[1].lower()
    
    # 獲取原始大小
    original_size = os.path.getsize(file_path)
    
    # 使用 sips 進行壓縮與縮放
    # --resampleHeightWidthMax: 限制最大尺寸
    # --setProperty format: 轉換為 jpeg 以節省空間（如果是巨大的圖片）
    # --setProperty formatOptions: 設置品質
    
    cmd = [
        'sips',
        '--resampleHeightWidthMax', str(MAX_SIZE),
        '--setProperty', 'formatOptions', str(QUALITY)
    ]
    
    # 如果是 PNG 且體積很大，考慮轉換為 JPEG（但為了保持透明度，通常我們只對非透明的 PNG 做此操作）
    # 這裡我們主要針對所有大型圖片進行品質壓縮和尺寸限制
    
    cmd.append(file_path)
    cmd.append('--out')
    cmd.append(file_path) # 直接覆蓋
    
    try:
        subprocess.run(cmd, check=True, capture_output=True)
        new_size = os.path.getsize(file_path)
        reduction = (original_size - new_size) / original_size * 100
        print(f"Compressed: {file_path} | {original_size/1024/1024:.2f}MB -> {new_size/1024/1024:.2f}MB ({reduction:.1f}% reduction)")
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def main():
    for root, dirs, files in os.walk(TARGET_DIR):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png')):
                full_path = os.path.join(root, file)
                # 只有大於 500KB 的圖片才壓縮
                if os.path.getsize(full_path) > 500 * 1024:
                    compress_image(full_path)

if __name__ == "__main__":
    main()
