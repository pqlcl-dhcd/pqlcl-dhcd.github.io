# Website Phòng Quản lý chất lượng - GitHub Pages

Website tĩnh HTML/CSS/JavaScript, không sử dụng logo.

## Đưa lên GitHub Pages

1. Tạo repository trên GitHub.
2. Upload toàn bộ các file trong thư mục này.
3. Vào **Settings → Pages**.
4. Chọn **Deploy from a branch**.
5. Chọn branch `main` và thư mục `/ (root)`.
6. Lưu lại và chờ GitHub Pages triển khai.

## Cấu trúc

- `index.html`: giao diện chính.
- `style.css`: giao diện responsive.
- `script.js`: dữ liệu mẫu và chức năng tìm kiếm.
- `assets/`: nơi đặt hình ảnh/tài liệu sau này.

## Kết nối Google Sheet

Bản này dùng dữ liệu mẫu trong `script.js`. Có thể nâng cấp sang:
Google Sheet → Apps Script/API → JSON → GitHub Pages,
để cán bộ chỉ cần cập nhật Google Sheet rồi website tự hiển thị dữ liệu.
