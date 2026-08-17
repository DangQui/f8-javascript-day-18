setTimeout(() => {
    console.log("Bài 5:");
}, 3200);

function layNguoiDung() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy người dùng thành công");
            resolve("Dữ liệu người dùng");
        }, 4000);
    });
}

function layDonHang() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy đơn hàng thất bại");
            reject("Lỗi mạng: Không lấy được đơn hàng");
        }, 5000);
    });
}

function laySanPham() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy sản phẩm thành công");
            resolve("Dữ liệu sản phẩm");
        }, 6000);
    });
}

/*
    ============================== Promise.all() ====================================
*/
const timeBatDau1 = new Date();

Promise.all([layNguoiDung(), layDonHang(), laySanPham()])
    .then((ketQua) => {
        // Promise.all() nếu chỉ cần 1 reject thì sẽ reject theo
        console.log("Tất cả đều thành công:", ketQua);
    })
    .catch((error) => {
        // Chỉ nhận được lỗi Đầu Tiên xảy ra (Promise nào reject trước thì lấy)
        // Không biết layNguoiDung() và laySanPham() có thành công hay không
        console.log("Promise.all() bị lỗi:", error);

        const timeKetThuc1 = new Date();
        const timeThucThi1 = (timeKetThuc1 - timeBatDau1) / 1000;
        console.log("Thời gian thực thi Promise.all():", timeThucThi1);
    });

/*
    ================================ Promise.allSettled() =====================================        
*/
const timeBatDau2 = new Date();

Promise.allSettled([layNguoiDung(), layDonHang(), laySanPham()]).then(
    (ketQua) => {
        // .then() luôn được chạy dù có reject
        console.log("Kết quả allSettled:", ketQua);

        ketQua.forEach((item, index) => {
            if (item.status === "fulfilled") {
                console.log(
                    `Promise ${index}: Thành công, dữ liệu =`,
                    item.value,
                );
            } else {
                console.log(`Promise ${index}: Thất bại, lý do =`, item.reason);
            }
        });

        const timeKetThuc2 = new Date();
        const timeThucThi2 = (timeKetThuc2 - timeBatDau2) / 1000;
        console.log("Thời gian thực thi Promise.allSettled():", timeThucThi2);
    },
);
