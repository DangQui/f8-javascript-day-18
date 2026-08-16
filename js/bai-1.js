/*
    Bài 1: 
        Viết một hàm checkAge(age) trả về một Promise:

            Nếu age >= 18, resolve với thông báo "Đủ tuổi".

            Nếu age < 18, reject với lỗi "Chưa đủ tuổi".

            Sau đó gọi hàm này với .then() và .catch() để in kết quả ra console.
*/

console.log("Bài 1:");
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Đủ tuổi");
        } else {
            reject("Chưa đủ tuổi");
        }
    });
}

checkAge(22)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkAge(16)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
