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




//Different Properties & Methods
