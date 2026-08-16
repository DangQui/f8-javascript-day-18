console.log("Bài 3:");

function layDonHang(id) {
    return new Promise((resolve) => {
        resolve({
            id: id,
            sanPham: "Áo thun",
        });
    });
}

function tinhTien(donHang) {
    return new Promise((resolve) => {
        const gia = 200000;
        resolve(gia);
    });
}

function apDungGiamGia(gia) {
    return new Promise((resolve) => {
        const giaSauGiam = gia - gia * 0.1;
        resolve(giaSauGiam);
    });
}

layDonHang(1)
    .then((donHang) => {
        console.log("Đơn hàng:", donHang);
        return tinhTien(donHang);
    })
    .then((gia) => {
        console.log("Giá gốc:", gia);
        return apDungGiamGia(gia);
    })
    .then((giaCuoiCung) => {
        console.log("Giá sau giảm:", giaCuoiCung);
    });
