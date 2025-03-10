                    //callstack  -> function inside the stack

//In inspect check "sources" (near console)
//SEE BREAKPOINT(apply breakpoint on "three()") AND CALLSTACK
function one() {
    return 1;
}
function two() {
    return one()+one();
}
function three() {
    let sum= two()+one();
    console.log(sum);
}
three();




                    //IMPORTANT NOTE
//Js single threaded hai -> means one line execute at a time
//but
// we can execute many line at a time also
// setTimeout(function,2000);
// setTimeout(function,2000);
// setTimeout(function,2000);
//ye teeno ek saath hi execute hongi...
//INITIALLY, Js normal run hoga aur aapne kaam ko callstack m daalta jaaiga and perform krta jaaiga
//jese hi setTimeout aaiga isko ye browser m daal dega 
//jese hi setTimeout aaiga isko ye browser m daal dega 
//jese hi setTimeout aaiga isko ye browser m daal dega 
//aur Js normal jese run krrha tha vse hi krta rhega
//aur jese hi browser ka time hojaaiga execute ka -> tho vo us function ya kaam ko callstack m daal dega
//Js usko perform krdega
//OVERALL, JS KBHI NHI RUKTAA VO CONTINUE AAPNA KAAM KRTA HAI 

//Above waala tho asynchronous nature thaaa
// synchronous nature (all line excute one by one)
let a=10;
console.log(a);
let b=190;
console.log(b);




                    //BASIC CONCEPT
let h1= document.querySelector("h1");
// setTimeout(function () {
//     h1.style.color="red";
// },1000);
// setTimeout(function () {
//     h1.style.color="pink";
// },2000);
// setTimeout(function () {
//     h1.style.color="yellow";
// },3000);
function changeColor (color, delay){
    setTimeout(function () {
        h1.style.color=color;
    },delay);
}
changeColor("red",1000);
changeColor("pink",2000);
changeColor("green",3000);




                    // CALLBACK HELL
//promises generally used to stop the callback hell(nesting condition)

//single data validity check
// function savetoDb (data){
//     let internetSpeed= Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         console.log("Successfuly added!", data)
//     }else{
//         console.log("Failed to added!", data)
//     }
// }
// savetoDb("Yash");


//multiple data validity check
function savetoDb (data, success, failure){
    let internetSpeed= Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
        success();
    }else{
        failure();
    }
}
//These a concept of callback hell
savetoDb("Yash",
    () =>{
        console.log("Success 1");
        savetoDb("Verma",
            () =>{
                console.log("Success 2");
                savetoDb("Yash Verma",
                    () =>{
                        console.log("Success 3");
                    },
                    () =>{
                        console.log("Failue 3");
                    }
                )
            },
            () =>{
                console.log("Failue 2");
            }
        )
    },
    () =>{
        console.log("Failed 1");
    }
)