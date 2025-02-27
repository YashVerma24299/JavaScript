    //SYNTAX
// const fn_name = (arguments1,....) => {//condition}

//more than 1 arg.
let sum1 = (a,b) => {
    return a+b;
}
console.log(sum1(10,9));

let sum2 = (a,b) => {
    console.log(a+b);
}
sum2(10,9);

//only 1 arg. (No Parenthesis compulsary)
let cube1 = n => {
    console.log(n*n*n);
}
cube1(5);
let cube2 = (n) => {
    console.log(n*n*n);
}
cube2(5);

//0 arg. (Parenthesis compulsary)
let print = () => {
    console.log("YASH VERMA");
}
print();



    //Implicit return
//syntax
//const fn_name = (arg1,...) => (//only return value);

const mul = (a,b) => (a*b);

// Question: Average of array
let ans= (arr) =>{
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    console.log(sum/arr.length);
}
ans([1,2,3,4,5]);