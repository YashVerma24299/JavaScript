let inp= document.querySelector("input");
let btn= document.querySelector("button");
let ul= document.querySelector("ul");

//insert
btn.addEventListener("click", function () {
    let item1 =document.createElement("li");
    let item2 =document.createElement("button");

    item1.innerText=inp.value;
    item2.innerText="delete";
    item2.classList.add("delete");
 
    item1.append(item2);
    ul.appendChild(item1);
    inp.value=""; //important
})

//delete
let del_btns=document.querySelectorAll(".delete");
for(btn of del_btns){
    btn.addEventListener("click", function () {
        let par = this.parentElement;
        console.log(par)
        par.remove();
    })
}
//here jo eat and sleep h vhi delete honge baaki new task delete nhi honge...
//inko delete kelia "event delegation" use hoga..
