let bt=document.querySelector(".box1 button");
console.dir(bt);
// For single btn //Method 1
// bt.onclick = function () { 
//     alert("Button was clicked!");
// }

// for multiple btns //Method 2
let btns=document.querySelectorAll(".box1 button");
console.dir(btns);
for(btn of btns){
    btn.onclick = yash;
    btn.onmouseenter = function () {
        console.log("You entered in button");
    }
}
function yash(){
    alert("Button was pressed!");
}

//(onmouseenter/onlick) -> set one value at a time
// This problem can solve by "AddEventListener"
let p=document.querySelector("p");
p.onclick=function () {
    console.log("First"); //overpower by below function
}
p.onclick=function () {
    console.log("Second"); // Always second print
}