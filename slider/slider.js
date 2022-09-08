let i = 1;
let j = 2;

let a = document.getElementsByClassName("colorbox1");
let b =document.getElementsByClassName("colorbox2");
let c = document.getElementsByClassName("colorbox3");
function plusSlides() {
    console.log("dassad");
   

    document.getElementsByClassName("colorbox1") =  document.getElementsByClassName("colorbox3");
    document.getElementsByClassName("colorbox2") =  a;
    document.getElementsByClassName("colorbox3") =  b;
}

