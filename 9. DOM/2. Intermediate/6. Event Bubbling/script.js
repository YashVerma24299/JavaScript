let div=document.querySelector("div");
let ul=document.querySelector("ul");
let lis=document.querySelectorAll("li");

//See in inspect
div.addEventListener("click", function () {
    console.log("div was clicked");
}) //one line output

ul.addEventListener("click", function () {
    console.log("ul was clicked");
}) //two line output

for(li of lis){
    li.addEventListener("click", function (yash) {
        yash.stopPropagation();// stop the three line output
        console.log("li was clicked");
    })
} //three line output

