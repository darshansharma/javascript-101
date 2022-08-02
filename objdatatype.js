function factFunction(a) {
    var x = 1;
    var fact = 1;
    while (x <= a) {
        fact = fact * x;
        x++;
    }
    return fact;
}

var obj = {
    1: factFunction(1),
    2: factFunction(2),
    3: factFunction(3),
    4: factFunction(4),
    5: factFunction(5)

}

console.log(obj[1]+obj[2]+obj[3]);