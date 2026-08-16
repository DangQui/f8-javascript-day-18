console.log("Bài 2:");

function fetchUser(id) {
    {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: id,
                    name: "User" + id,
                });
            }, 1000);
        });
    }
}

fetchUser(1).then((user) => {
    console.log(user);
});

console.log("Đang chờ...");
