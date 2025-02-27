//syntax: arr.reduce(accumulator,ele)
let num= [1,2,3,4,5,6];

let sum=num.reduce((return_value_of_everytime_store_here,ele) => {
    return (return_value_of_everytime_store_here+ele);
})
console.log(sum);


let max=num.reduce((max,ele) => {
    return Math.max(max,ele);
})
console.log(max);


let mul=num.reduce((res,ele) => {
    return (res*ele);
},1);//initially res=1;
console.log(mul);


