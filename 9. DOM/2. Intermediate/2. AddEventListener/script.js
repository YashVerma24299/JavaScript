// Syntax: Element.addEventListener(event, callback)
let btnns=document.querySelectorAll(".box2 button")
for(bt of btnns){
    bt.addEventListener("click" , function () {
        console.log("First");
    });
    bt.addEventListener("click" , print);
    bt.addEventListener("dblclick" , function () {
        console.log("Double Click");
    });
}
function print() {
    console.log("Second");;
}
// get many Event -> https://developer.mozilla.org/en-US/docs/Web/API/Event



//in inspect
let container = document.querySelector(".container");
container.addEventListener("mouseenter", function () {
    console.log("Mouse inside the container");
});



//this
let btn = document.querySelector(".yash");
btn.addEventListener("click", function () {
    console.log(this);
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor="pink";
});