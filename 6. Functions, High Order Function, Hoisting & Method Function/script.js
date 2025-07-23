                    //Functions
//SYNTAX
// function function_name(){
    //.......
// }


//QUESTION:1
function sum(a,b){
    return a+b;
}
let ans=sum(sum(sum(1,1),2),10); // it's possible
console.log(ans);


//QUESTION:2
function concat(str){
    let s="";
    for(let i=0; i<str.length; i++){
        s=s+str[i];
    }
    return s;
}
let str=["hi","_","buddy","!!"];
console.log(concat(str));



//HOISTING(GOOD TOPIC: SEE EXAMPLE ONLY)
// Function declarations and var declarations are hoisted to the top of their scope.
// var is hoisted with value undefined.
// let and const are hoisted but not initialized → accessing them before declaration gives ReferenceError.
hoisted();
function hoisted() {
  console.log(y); // undefined (due to hoisting of var declaration)
  var y = 42;
  console.log(y);
}
hoistedd(2);
function hoistedd(m) {
  console.log(y); // undefined (due to hoisting of var declaration)
  var y = 42;
  console.log(y*m);
}
yash(20);
function yash(a) {
  console.log(y); // undefined (due to hoisting of var declaration)
  var y = 42;
  console.log(y+a);
}
// hoisted1();                       // Reference Error
// function hoisted1() {
//   console.log(y); // Reference Error
//   const y = 42; || let y =42;
//   console.log(y);
// }
// 🔥 HOISTING Summary:
// - function declarations are fully hoisted
// - var: hoisted + initialized as undefined
// - let/const: hoisted but not initialized → ReferenceError if accessed before declaration



//QUESTION:3       //known function expression
let res = function(a,b,c=4){
    return a*b*c;
}
console.log(res); //print the function code in inspect
console.log(res(1,5));
console.log(res(1,5,2));
// let res = function(a,b,c){
//     return a*b*c;
// }
// console.log(res(3,5));



////High Order Functions
// Takes one or multiple fn as arguments
function xyz(fn){
    for(let i=0; i<3; i++){
        fn();
    }
}
let print_name= function(){
    console.log("YASH");
}
xyz(print_name);



//return a function
function check(request){
    if(request=="odd"){
        // let oddd = function(){
        //     console.log("ODD");
        // }
        // return oddd;
        return function(){
            console.log("ODD");
        }
    }
    else{
        return function(){
            console.log("EVEN");
        }
    }
}
const result = check("odd");
result();


//OBJECTS --> key-value
//METHODS --> key-function
let calcii = {
    num:100,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
    // mul: function(a,b){
    //     return a*b;
    // }
}
console.log(calcii.add(5,5)); //access value


calcii.pow = function (a, b) {
    return a**b;
};
calcii.div = function div(a, b) {
    return a / b;
};
delete calcii.sub; //delete a Key
console.log(calcii); //see output acche se specially (pow)


calcii.add = function(a, b) {
    return `Sum: ${a + b}`;
};
console.log(calcii.add(5,5)); //update


//QUESTION:4
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i).toLowerCase(); // Convert to lowercase for easy comparison
        // let ch=str[i].toLowerCase();

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        count++;
        }
    }

    return count;
}
console.log(countVowels("Hello"));