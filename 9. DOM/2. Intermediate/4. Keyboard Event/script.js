// Go there: https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events

let btn = document.querySelector("button");

btn.addEventListener("click", function (yash) {
    console.log(yash);
    console.log("Button click");
})

btn.addEventListener("dblclick", function (yash) {
    console.log(yash);
    console.log("dblclick click");
})



//in inspect
let inp1 = document.querySelector(".input1");
inp1.addEventListener("keydown", function () {
    console.log("Key was pressed");
});
inp1.addEventListener("keyup", function () {
    console.log("Released");
});

let inp2 = document.querySelector(".input2");
inp2.addEventListener("keydown", function (yash) {
    console.log(yash);
    console.log(yash.key);
    console.log(yash.code);
    console.log("Key was pressed");
});
