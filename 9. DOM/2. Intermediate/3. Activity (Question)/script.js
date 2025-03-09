let b=document.querySelector(".main button");

b.addEventListener("click", function () {
    let h3=document.querySelector("h3");
    let randomColor=random_color();
    h3.innerText=randomColor;

    console.log("Color Updated");

    let div=document.querySelector(".main div");
    div.style.backgroundColor=randomColor;
});

function random_color () {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    return `rgb(${r}, ${g}, ${b})`;
}