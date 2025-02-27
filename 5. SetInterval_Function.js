//setInterval(function/callback, timeout)
//setTimeout  time->execute
//setInterval time->execute->time->execute->time->execute.......

                                //Run Separately
// console.log("Hi there");
// setInterval(()=>{
//     console.log("Yash Verma");
// },2000);
// console.log("My name is ");


// console.log("11111111111");
// let i=setInterval(()=>{
//     console.log("333333333");
// },3000);
// console.log("22222222222");
// clearInterval(i);




// //Question: Write a function that print "hello" for 5 times at interval of 2s each.
// let id=setInterval(()=>{
//     console.log("Helloo");
// },2000);

// setTimeout( () =>{
//     clearInterval(id);
//     console.log("Clear Inreval Run")
// },12000);



let ans= (arr) =>{
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum/arr.length);
}
ans([1,2,3,4,5]);