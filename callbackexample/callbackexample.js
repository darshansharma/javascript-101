function A(x) {
    console.log("A");
    x();
}

function B(y) {
    console.log("B");
    y();
}

function C() {
    console.log("C");
}

A(B());
