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

let arr1 = [];

getData()
    .then(function (resp) {
        let contain = resp["data"];
        console.log("First promise resolved");
        for (let i = 0; i < contain.length; i++) {
            arr1.push(contain[i]);
        }
        console.log(contain);
        getMoreData()
            .then(function (value) {
                console.log("Second promise resolved");
                let container = value["data"];
                console.log(container);
                for (let i = 0; i < container.length; i++) {
                    arr1.push(container[i]);
                }
                let table = document.getElementById("mainTable");
                for (let i = 0; i < arr1.length; i++) {
                    let row = table.insertRow();
                    row.insertCell().append(arr1[i].firstName);
                    row.insertCell().append(arr1[i].lastName);
                    row.insertCell().append(arr1[i].age);
                }
                console.log("Final array = ", arr1);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
    .catch(function (err) {
        console.log(err);
        console.log(" error 404 not found");
    });
