//Data type of (a,aa,aaa) is "Number"
a=10;
aa=10.1;
aaa=-10;
console.log(typeof a);
console.log(typeof aa);
console.log(typeof aaa);

//There is always limited memory range
b=0.99999999999;
console.log(b);             //same
c=0.99999999999999999;
console.log(c);             // 1

// exponential
console.log(2**3);         // 2^3 = 8

//NAN (Not A Number)
value=0/0;
console.log(value);
console.log(typeof value);

            //Keywords
// let=can't redeclare & can update
let age=24; 
age=25;

// const=can't redeclare & can't update
const num=24; 

// var=can redeclare & can update
var n=24; 
var n=30;
n=25;

// Post and Pre
let p=10,q=20;
console.log(p++);
console.log(p);

console.log(++q);
console.log(q);

// Naming Convention
let fullName; //camelCase  //Generally prefer this
let full_name; //snake_case
let FullName; //PascalCase

// Boolean Data Type
let adult=true;
let check='true';
console.log(adult);
console.log(check);
console.log(typeof adult);
console.log(typeof check);

// Data Type Conversion
let val=12345;
console.log(typeof val);
val=true;
console.log(typeof val);
val="Yash";
console.log(typeof val);

// Above data type conversion can't be implement on TypeScript
// Complex version of javaScipt

                // String
console.log("Concept 1");
let str="a b c d"
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

console.log("Concept 2");
let strr="a1 bggg c 123d"
console.log(strr[0]);
console.log(strr[1]);
console.log(strr[3]);
console.log(strr[4]);
console.log(strr[5]);

console.log("Concept 3");
let strrr='123';
console.log(strrr[0]);
console.log(strrr[2]);

console.log("Concept 4");
//outer and inner quote not same;
let str2="this is my 'book'";
let strr2='this is my "book"';
console.log(str2);
console.log(strr2);

console.log("Concept 5");
//when we search out of range
console.log(str2[100]);             //undefined

console.log("Concept 6");
//length
console.log("yash".length);
console.log("yash"[2]);

// Undefined
let take;
console.log(take);
console.log(typeof take);

// null ->Intentional absense of any value (jaan booj kr null dena)
let  take2=null;
console.log(take2);
console.log(typeof take2);
