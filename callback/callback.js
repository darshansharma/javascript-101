function printer(abc) {
    console.log("Calling printer function");
    abc();
}

var str = "Sanjeev";

// printer(function () {
//     console.log("Train is running ...");
// });

///

function performOperatrionOnData(f1, f2) {
    // operations
    let x;
    let y;
    console.log(f1);
}

function add(x, y) {
    console.log(x + y);
}

function subtract(x, y) {
    console.log(x - y);
}

// add(1,2);

performOperatrionOnData(add, subtract);
