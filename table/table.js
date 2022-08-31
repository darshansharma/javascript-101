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


function insertfun(first, second) {

    let arr1 = [];
    for (let i = 0; i < first.length; i++) {
        arr1.push(first[i]);
    }

    for (let i = 0; i < second.length; i++) {
        arr1.push(second[i]);
    }


    let table = document.getElementById("mainTable");
    for (let i = 0; i < arr1.length; i++) {
        let row = table.insertRow();
        row.insertCell().append(arr1[i].firstName);
        row.insertCell().append(arr1[i].lastName);
        row.insertCell().append(arr1[i].age);
    }

}


getData()
    .then(function (resp) {
        let store;

        store = resp["data"];
        console.log("First promise resolved");

        console.log(store);
        getMoreData()
            .then(function (value) {
                let bigstorage;
                console.log("Second promise resolved");
                bigstorage = value["data"];
                console.log(bigstorage);
                insertfun(store, bigstorage);
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
