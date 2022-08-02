function factFunction(a) {
    var x =1;
    var fact = 1;
    while (x <= a) {
        fact = fact * x;
        x++;
    }
    return fact;
}

var answerone = factFunction(2);
var answer2 = factFunction(3);
console.log(answer2);