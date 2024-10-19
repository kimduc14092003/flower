onload = () => {
      soundEffect.play();  // Phát âm thanh

        setTimeout(function () {
                // Mã sẽ thực thi sau khi delay
                console.log("Hello, thế giới!");
                document.body.classList.remove("container");
        }, 5500);
};

let countdownValue = 5; // Bắt đầu từ 5 giây

    // Hiển thị pop-up đếm ngược
    document.getElementById("countdownPopup").style.display = "block";

    // Hàm thực hiện đếm ngược
    const countdownTimer = setInterval(function() {
        countdownValue--; // Giảm giá trị đếm ngược
        document.getElementById("countdown").innerHTML = countdownValue; // Cập nhật nội dung pop-up

        // Kiểm tra nếu đếm ngược kết thúc
        if (countdownValue <= 0) {
            clearInterval(countdownTimer); // Dừng bộ đếm
            document.getElementById("countdownPopup").innerHTML = "Tặng cậu nha ❤️"; // Hiển thị thông báo kết thúc
            setTimeout(function() {
                document.getElementById("countdownPopup").style.display = "none"; // Ẩn pop-up sau khi hết giờ
            }, 1000); // Ẩn sau 1 giây
        }
    }, 1000); // Lặp lại mỗi giây


