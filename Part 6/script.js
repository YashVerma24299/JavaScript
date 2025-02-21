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
hoisted();
function hoisted() {
  console.log(y); // undefined (due to hoisting of var declaration)
  var y = 42;
  console.log(y);
}
// hoisted1();                       // Reference Error
// function hoisted1() {
//   console.log(y); // Reference Error
//   const y = 42; || let y =42;
//   console.log(y);
// }


//QUESTION:3       //known function expression
let res = function(a,b,c){
    return a*b*c;
}
console.log(res); //print the function code in inspect
console.log(res(3,5));
console.log(res(1,5,2));

////High Order Functions
// Takes one or multiple fn as arguments
function count(fn){
    for(let i=0; i<3; i++){
        fn();
    }
}
let print_name= function(){
    console.log("YASH");
}
count(print_name);
