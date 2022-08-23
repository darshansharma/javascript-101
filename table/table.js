function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 11);
            if (true) {
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
            if (true) {
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

var contain;
var container;

function insertfun() {
    var id = 1;
    for (var i = 0; i < 2; i++) {
        document.getElementById("number" + (id + i)).innerHTML =
            ["data"][i]["firstName"];

        document.getElementById("number" + (id + i + 1)).innerHTML =
            ["data"][i]["lastName"];

        document.getElementById("number" + (id + i + 2)).innerHTML =
            ["data"][i]["age"];
        id += 2;
    }
}

function moreinsertfun() {
    var id = 3;
    for (var j = 0; j < 4; j++) {
        document.getElementById("number" + (id + i)).innerHTML =
            ["data"][j]["firstName"];

        document.getElementById("number" + (id + i + 1)).innerHTML =
            ["data"][j]["lastName"];

        document.getElementById("number" + (id + i + 2)).innerHTML =
            ["data"][j]["age"];
        id += 2;
    }
}


getData()
    .then(function (resp) {
        contain = resp;
        console.log("First promise resolved");
        console.log(contain);
        insertfun();
        getMoreData()
            .then(function (value) {
                console.log("Second promise resolved");
                container = value;
                console.log(container);
                moreinsertfun();
            })
            .catch(function () {
                console.log(" error 404 not found");
            });
    })
    .catch(function (err) {
        console.log(err);
        console.log(" error 404 not found");
    });
