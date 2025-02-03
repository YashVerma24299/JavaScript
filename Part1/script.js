//Data type of (a,aa,aaa) is Number
a=10;
aa=10.1;
aaa=-10;
console.log(typeof a);
console.log(typeof aa);
console.log(typeof aaa);

//There is always limited memory range
b=0.99999999999;
console.log(b);
c=0.99999999999999999;
console.log(c);

// exponential
console.log(2**3);

//NAN (Not A Number)
value=0/0;
console.log(value);
console.log(typeof value);

            //Keywords
// let=can't redeclare & can update
let age=24; 
// let age=30;
age=25;

// const=can't redeclare & can't update
const num=24; 
// const num=30;
// num=25;

// var=can redeclare & can update
var n=24; 
var n=30;
n=25;