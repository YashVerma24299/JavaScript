let sum =((a,b=9) =>{
    return a+b;
});
console.log(sum(1,20));
console.log(sum(4)); 


let sum2 =((a=9,b) =>{
    return a+b;
});
console.log(sum2(1,20));
console.log(sum2(4));//a=4, b=undefined //Output: Nan