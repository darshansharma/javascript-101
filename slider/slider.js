let i = 1;
let j = 2;

function plusSlides() {
    console.log("dassad");
    i += 1;
    j += 1;

    for (let i = 1; i <= 3; i++) {
        document.getElementsByClassName(
            "colorbox" + i
        )[0].style.backgroundColor = `rgb(${Math.floor(
            Math.random(0, 255) * 255
        )}, ${Math.floor(Math.random(0, 255) * 255)}, ${Math.floor(
            Math.random(0, 255) * 255
        )})`;
    }
}
