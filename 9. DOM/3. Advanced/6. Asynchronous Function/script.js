//All async function by default return PROMISES
//So, apply all properties of promises function on async function

// Generally, In async function 
//Koi error nhi hetho - Iski state -> Fullfilled/ Resolved/ Success hogi
//Error hua tho -> Reject hogi

//Success
async function print1() {
    return console.log("Success"); 
}
// console.log(print1()); //check in inspect

//Failure
async function print2() {
    abc.abc(); //error
    return console.log("Print2"); 
}
// console.log(print2()); //check in inspect
async function print3() {
    throw("Error aagai") //error
    return console.log("Print3");
}
// console.log(print3()); //check in inspect


print1()
    .then( ()=>{
        console.log("Prmoises was resolved for print1");
    })
    .catch( ()=>{
        console.log("Prmoises was rejected for print1");
    })
 
print2()
    .then( ()=>{
        console.log("Prmoises was resolved for print2");
    })
    .catch( ()=>{
        console.log("Prmoises was rejected for print2");
    })   

    
let demo = async () =>{
    return 5;
}
console.log(demo);
console.log(demo());