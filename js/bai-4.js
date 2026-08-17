console.log("Bài 4:");

function layDiemToan() {
    return new Promise((resolve) => {
        // setTimeout mô phỏng việc gọi API mất thời gian
        setTimeout(() => {
            console.log("Đã lấy được điểm Toán");
            resolve(8);
        }, 1000);
    });
}

function layDiemVan() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Đã lấy điểm Văn");
            resolve(7);
        }, 2000);
    });
}

function layDiemAnh() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Đã lấy điểm Anh");
            resolve(9);
        }, 3000);
    });
}

const timeBatDau = new Date();

Promise.all([layDiemToan(), layDiemVan(), layDiemAnh()]).then((ketQua) => {
    const [diemToan, diemVan, diemAnh] = ketQua;
    const diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

    console.log("Điểm Toán:", diemToan);
    console.log("Điểm Văn:", diemVan);
    console.log("Điểm Anh:", diemAnh);

    const timeKetThuc = new Date();
    const timeThucThi = (timeKetThuc - timeBatDau) / 1000;

    console.log("Điểm trung bình:", diemTrungBinh);
    console.log("Thời gian thực thi:", timeThucThi);
});
