var one;

function setvalue(val) {
    document.getElementById("tagone").value += val;
}

function plusfun() {
    one = parseInt(document.getElementById("tagone").value);
    var h = "+";
    document.getElementById("tagone").value = "";
    document.getElementById("tagone").value += h;
}

function minusfun() {
    one = parseInt(document.getElementById("tagone").value);
    var i = "-";
    document.getElementById("tagone").value = "";
    document.getElementById("tagone").value += i;
}

function dividefun() {
    one = parseInt(document.getElementById("tagone").value);
    var j = "/";
    document.getElementById("tagone").value = "";
    document.getElementById("tagone").value += j;
}

function multiplyfun() {
    one = parseInt(document.getElementById("tagone").value);
    document.getElementById("tagone").value = "";
}

function percentfun() {
    one = parseInt(document.getElementById("tagone").value);

    document.getElementById("tagone").value = "";
}

function equalfun() {
    var two = parseInt(document.getElementById("tagone").value);
    document.getElementById("tagone").value = one + two;
}

function clearfun() {
    document.getElementById("tagone").value = " ";
}
