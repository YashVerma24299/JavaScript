//setInterval(function/callback, timeout)
//setTimeout  time->execute
//setInterval time->execute->time->execute->time->execute.......

                                //Run Separately
console.log("Hi there");
setInterval(()=>{
    console.log("Yash Verma");
},2000);  // Executes the callback every 2000ms = 2 seconds
console.log("My name is ");


console.log("11111111111");
let i=setInterval(()=>{
    console.log("333333333");
},3000);
console.log("22222222222");
clearInterval(i);




//Question: Write a function that print "hello" for 5 times at interval of 2s each.
let id=setInterval(()=>{
    console.log("Helloo");
},2000);

setTimeout( () =>{
    clearInterval(id);
    console.log("Clear Inreval Run")
},12000);



