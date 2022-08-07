var one;
var operator;

function setvalue(val) {
    document.getElementById("tagone").value += val;
}

function plusfun() {
    one = parseInt(document.getElementById("tagone").value);
    operator = "+";
    document.getElementById("tagone").value = "";

}

function minusfun() {
    one = parseInt(document.getElementById("tagone").value);
    operator = "-";
    document.getElementById("tagone").value = "";

}

function dividefun() {
    one = parseInt(document.getElementById("tagone").value);
    operator = "/";
    document.getElementById("tagone").value = "";

}

function multiplyfun() {
    one = parseInt(document.getElementById("tagone").value);
    operator = "*";
    document.getElementById("tagone").value = "";
}

function percentfun() {
    one = parseInt(document.getElementById("tagone").value);
    operator = "%";
    document.getElementById("tagone").value = "";
}

function equalfun() {
    var two = parseInt(document.getElementById("tagone").value);
    if (operator == "+") {
        document.getElementById("tagone").value = one + two;
    }

    if (operator == "-") {
        document.getElementById("tagone").value = one - two;
    }

    if (operator == "/") {
        document.getElementById("tagone").value = one / two;
    }

    if (operator == "*") {
        document.getElementById("tagone").value = one * two;
    }

    if (operator == "%") {
        document.getElementById("tagone").value = one % two;
    }




}

function clearfun() {
    document.getElementById("tagone").value = "";
}
