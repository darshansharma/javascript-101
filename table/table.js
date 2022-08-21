function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 11);
            if (x < 5) {
                resolve({
                    data: [
                        { firstName: "Darshan", lastName: "Sharma", age: 24 },
                        {
                            firstName: "Sanjeev",
                            lastName: "Prabhakar",
                            age: 20,
                        },
                    ],
                    message: "data fetched successfully",
                });
            }
            reject({
                error: "No data found",
            });
        }, 2000);
    });
}

function getMoreData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 11);
            if (x < 5) {
                resolve({
                    data: [
                        { firstName: "Virat", lastName: "Kohli", age: 32 },
                        { firstName: "Rohit", lastName: "Sharma", age: 34 },
                        { firstName: "M.S", lastName: "Dhoni", age: 41 },
                        { firstName: "Yuvraj", lastName: "Singh", age: 39 },
                    ],
                    message: "data fetched successfully",
                });
            }
            reject({
                error: "No data found",
            });
        }, 2000);
    });
}

function insertfun() {
    var id = 1;
    for (var i = 0; i < 6; i++) {
        document.getElementById("number" + (id + i)).innerHTML =
            data["data"][i]["firstName"];

        document.getElementById("number" + (id + i + 1)).innerHTML =
            data["data"][i]["lastName"];

        document.getElementById("number" + (id + i + 2)).innerHTML =
            data["data"][i]["age"];
        id += 2;
    }
}
