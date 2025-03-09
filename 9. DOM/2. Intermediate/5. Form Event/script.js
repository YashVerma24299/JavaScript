let form =  document.querySelector("form");

form.addEventListener("submit", function (){
    alert("Form Submitted!!");
})

//It stop from move to another page (Before using this, commented the above code)
// form.addEventListener("submit", function (yash){
//     yash.preventDefault();
//     alert("Form Submitted!!");
// })


form.addEventListener("submit", function (yash){
    yash.preventDefault();
    
    let inp=document.querySelector("input");
    console.dir(inp);
    console.log(inp.value); //innerText is not used
})




let form2 =  document.querySelector(".main");

form2.addEventListener("submit", function (yash){
    yash.preventDefault();
    
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");

    console.log(user);
    console.log(pass);
    console.log(user.value);
    console.log(pass.value);
})