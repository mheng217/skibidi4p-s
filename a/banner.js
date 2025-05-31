let slideIndex = 1; // Khởi tạo slideIndex là 1 để bắt đầu từ slide đầu tiên
showSlides(slideIndex); // Gọi hàm để hiển thị slide đầu tiên khi trang tải

// Hàm chuyển slide khi nhấn nút điều khiển (prev/next)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Hàm chuyển slide khi nhấn vào dấu chấm chỉ thị
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Hàm chính để điều khiển hiển thị slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // Lấy tất cả slide
    let dots = document.getElementsByClassName("dot"); // Lấy tất cả dấu chấm

    // Xử lý trường hợp slideIndex vượt quá giới hạn
    if (n > slides.length) { slideIndex = 1 } // Về slide đầu nếu đi quá cuối
    if (n < 1) { slideIndex = slides.length } // Về slide cuối nếu đi lùi quá đầu

    // Ẩn tất cả các slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Xóa class 'active' khỏi tất cả các dấu chấm
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Hiển thị slide hiện tại và thêm class 'active' cho dấu chấm tương ứng
    if (slides.length > 0) { // Đảm bảo có slide trước khi thao tác
        slides[slideIndex - 1].style.display = "block"; // slideIndex-1 vì mảng bắt đầu từ 0
    }
    if (dots.length > 0) { // Đảm bảo có dấu chấm trước khi thao tác
        dots[slideIndex - 1].className += " active";
    }
}

// Tùy chọn: Tự động chuyển slide sau một khoảng thời gian
let autoSlideIntervalId;
function startAutoSlideshow() {
    // Dừng bất kỳ interval nào đang chạy để tránh tạo nhiều interval cùng lúc
    stopAutoSlideshow(); 
    autoSlideIntervalId = setInterval(function() {
        plusSlides(1); // Chuyển sang slide kế tiếp
    }, 5000); // Thay đổi ảnh mỗi 5 giây
}

function stopAutoSlideshow() {
    clearInterval(autoSlideIntervalId); // Dừng việc tự động chuyển slide
}

// Bắt đầu tự động chuyển slide khi trang được tải hoàn toàn
// Đảm bảo hàm này được gọi sau khi `showSlides(slideIndex)` ban đầu
// để tránh xung đột hoặc hiển thị không đúng ban đầu
startAutoSlideshow();

// Thêm sự kiện để tạm dừng/tiếp tục tự động chuyển slide khi di chuột vào/ra banner
const bannerArea = document.querySelector('.banner-area');
if (bannerArea) {
    bannerArea.addEventListener('mouseenter', stopAutoSlideshow);
    bannerArea.addEventListener('mouseleave', startAutoSlideshow);
}
