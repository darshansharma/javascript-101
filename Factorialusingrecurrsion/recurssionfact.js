let a = 1;

let fact = 1;

let c;

let d = 4;

function factfun(c) {
    fact = fact * a;
    a++;

    if (a <= c) {
        factfun(c);
    }

    a--;

    if(a == c){
        console.log(fact);
    }
}

factfun(d);

