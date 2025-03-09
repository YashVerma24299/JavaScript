let old=document.getElementsByClassName("oldImg");
//image location in editor
for(let i=0; i<old.length; i++){
    console.log(old[i]);
}

//for all properties
for(let i=0; i<old.length; i++){
    console.dir(old[i]);
}

// image location in file
for(let i=0; i<old.length; i++){
    console.log(old[i].src);
}

//image ka className 
for(let i=0; i<old.length; i++){
    console.log(old[i].className);
}

//image ka tagName 
for(let i=0; i<old.length; i++){
    console.log(old[i].tagName);
}



//QuerySelector ->select first one
//QuerySelectorAll ->select all
console.log(document.querySelector("h1"));
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector("#mainImg"));
console.dir(document.querySelector(".oldImg"));

// return className ("div" ke andr jobhi "a" hai uski classname ki properties)
console.dir(document.querySelector("div a"));

console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll("div a"));



//Manipulating Attribute
//Manipulating style
let links=document.querySelectorAll(".box a");
for (link of links) {
    link.style.color="purple";
}



//Navigation
let par=document.querySelector("h4");
let parent=par.parentElement;
console.log(parent);
let child=par.children;
console.log(child);

let par1=document.querySelector(".box");
let parent1=par1.parentElement;
console.log(parent1);
let child1=par1.children;
console.log(child1);

let ul=document.querySelector("ul");
let childd=ul.children;
console.log(childd);
console.log(childd[2]);

let previos_sibling=childd[2].previousElementSibling;
console.log(previos_sibling);

let next_sibling=previos_sibling.nextElementSibling;
console.log(next_sibling);



                    //Adding element
//create
let newP=document.createElement("p");
console.log(newP);
console.dir(newP); // all properties are empty
newP.innerText = "Hi, I am a newP";
//append the element in the body
let body=document.querySelector("body");
body.appendChild(newP); // at the end

//create
let list=document.createElement("li");
console.log(list);
console.dir(list);
list.innerText = "Hi, I am a list";
//add
let new_list=document.querySelector(".box ul");
new_list.appendChild(list);

//add something last 
new_list.append("234")
new_list.append("567")
newP.append("---EXTRA---")

//add something first 
new_list.prepend("234")
new_list.prepend("567")
newP.prepend("---EXTRA---")

//insertAdjacentElement(position, element)
//(4 position)
let btn1=document.createElement("button");
btn1.innerText="NEW BUTTON1";
let btn2=document.createElement("button");
btn2.innerText="NEW BUTTON2";
let btn3=document.createElement("button");
btn3.innerText="NEW BUTTON3";
let btn4=document.createElement("button");
btn4.innerText="NEW BUTTON4";
let p=document.querySelector("p");

// see in website + website ki html
p.insertAdjacentElement("beforebegin",btn1);
p.insertAdjacentElement("beforeend",btn2);
p.insertAdjacentElement("afterbegin",btn3);
p.insertAdjacentElement("afterend",btn4);



//Remove element
//Both work same
// body.removeChild(btn4); 
// btn4.remove();