var one;

function sevenfun(val) {
    document.getElementById("tagone").value += val;
}

function sixfun(val) {
    document.getElementById("tagone").value += val;
}

function fivefun(val) {
    document.getElementById("tagone").value += val;
}

function fourfun(val) {
    document.getElementById("tagone").value += val;
}

function threefun(val) {
    document.getElementById("tagone").value += val;
}

function twofun(val) {
    document.getElementById("tagone").value += val;
}

function onefun(val) {
    document.getElementById("tagone").value += val;
}

function plusfun() {
    one = parseInt(document.getElementById("tagone").value);
    var h = "+";
    document.getElementById("tagone").value = " ";
    document.getElementById("tagone").value += h;
}

function minusfun() {
    var i = "-";
    document.getElementById("tagone").value += i;
}

function dividefun() {
    var j = "/";
    document.getElementById("tagone").value += j;
}

function zerofun(val) {
    document.getElementById("tagone").value += val;
}

function multiplyfun() {
    var l = "*";
    document.getElementById("tagone").value += l;
}

function eightfun(val) {
    document.getElementById("tagone").value += val;
}

function ninefun(val) {
    document.getElementById("tagone").value += val;
}

function percentfun() {
    var o = "%";
    document.getElementById("tagone").value += o;
}

function equalfun() {
    var two = parseInt(document.getElementById("tagone").value);
    document.getElementById("tagone").value = one + two;
}

function clearfun() {
    document.getElementById("tagone").value = " ";
}
