function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = Math.floor(Math.random() * 30);
            let arr = [];
            while (x--) {
                arr.push({
                    firstName: Math.floor(
                        Math.random() * 123456789 - 123456
                    ).toString(),
                    lastName: Math.floor(
                        Math.random() * 1223433456 - 123324
                    ).toString(),
                    age: Math.floor(Math.random() * 30 - 10),
                });
            }
            if (true) {
                resolve({
                    data: [...arr],
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
            let x = Math.floor(Math.random() * 30);
            let arr = [];
            while (x--) {
                arr.push({
                    firstName: Math.floor(
                        Math.random() * 123456789 - 123456
                    ).toString(),
                    lastName: Math.floor(
                        Math.random() * 1223433456 - 123324
                    ).toString(),
                    age: Math.floor(Math.random() * 30 - 10),
                });
            }
            if (true) {
                resolve({
                    data: [...arr],
                    message: "data fetched successfully",
                });
            }
            reject({
                error: "No data found",
            });
        }, 2000);
    });
}

var arr = [];

function allinone() {
    var id = 1;
    for (var i = 0; i < 6; i++) {
        document.getElementById("number" + (id + i)).innerHTML =
            arr[i]["firstName"];

        document.getElementById("number" + (id + i + 1)).innerHTML =
            arr[i]["lastName"];

        document.getElementById("number" + (id + i + 2)).innerHTML =
            arr[i]["age"];
        id += 2;
    }
}

var contain;
var container;

function insertfun() {
    var id = 1;
    for (var i = 0; i < 2; i++) {
        document.getElementById("number" + (id + i)).innerHTML =
            contain["data"][i]["firstName"];

        document.getElementById("number" + (id + i + 1)).innerHTML =
            contain["data"][i]["lastName"];

        document.getElementById("number" + (id + i + 2)).innerHTML =
            contain["data"][i]["age"];
        id += 2;
    }
}

function moreinsertfun() {
    var id = 7;
    for (var j = 0; j < 4; j++) {
        document.getElementById("number" + (id + j)).innerHTML =
            container["data"][j]["firstName"];

        document.getElementById("number" + (id + j + 1)).innerHTML =
            container["data"][j]["lastName"];

        document.getElementById("number" + (id + j + 2)).innerHTML =
            container["data"][j]["age"];
        id += 2;
    }
}

getData()
    .then(function (resp) {
        contain = resp;
        console.log("First promise resolved");
        console.log(contain);

        getMoreData()
            .then(function (value) {
                console.log("Second promise resolved");
                container = value;
                console.log(container);
            })
            .catch(function () {
                console.log(" error 404 not found");
            });
    })
    .catch(function (err) {
        console.log(err);
        console.log(" error 404 not found");
    });
