var one;
var operator;

function setvalue(val) {
    document.getElementById("tagone").innerText += val;
}

function plusfun() {
    one = parseInt(document.getElementById("tagone").innerText);
    operator = "+";
    document.getElementById("tagone").innerText = "";
}

function minusfun() {
    one = parseInt(document.getElementById("tagone").innerText);
    operator = "-";
    document.getElementById("tagone").innerText = "";
}

function dividefun() {
    one = parseInt(document.getElementById("tagone").innerText);
    operator = "/";
    document.getElementById("tagone").innerText = "";
}

function multiplyfun() {
    one = parseInt(document.getElementById("tagone").innerText);
    operator = "*";
    document.getElementById("tagone").innerText = "";
}

function percentfun() {
    one = parseInt(document.getElementById("tagone").innerText);
    operator = "%";
    document.getElementById("tagone").innerText = "";
}

function equalfun() {
    var two = parseInt(document.getElementById("tagone").innerText);
    if (operator == "+") {
        document.getElementById("tagone").innerText = one + two;
    }

    if (operator == "-") {
        document.getElementById("tagone").innerText = one - two;
    }

    if (operator == "/") {
        document.getElementById("tagone").innerText = one / two;
    }

    if (operator == "*") {
        document.getElementById("tagone").innerText = one * two;
    }

    if (operator == "%") {
        document.getElementById("tagone").innerText = one % two;
    }
}

function clearfun() {
    document.getElementById("tagone").innerText = "";
}
