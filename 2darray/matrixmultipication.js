let arr1 = [[], [], []];
let arr2 = [[], [], []];
let arr3 = [[], [], []];

let a = 1;
let b = 2;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr1[i][j] = a;
        a++;
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arr2[i][j] = b;
        b++;
    }
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            arr3[i][j] = arr3[i][j] + arr1[i][k] * arr2[k][i];
        }
    }
}



for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(arr3[i][j]);
    }
}