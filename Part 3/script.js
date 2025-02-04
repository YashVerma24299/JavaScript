                        // String (srings are immutable)

// trim()-remove left and right whitespace
console.log("TRIM:");
let str="  Yash Verma ";
console.log(str.trim());

// upper and lower case
console.log("LOWERCASE & UPPERCASE:");
let str1="Ysh VermAA"
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Indexof
console.log("Indexof:");
let str2="My name is YASHVERMA"
console.log(str2.indexOf("n"));
console.log(str2.indexOf("name"));
console.log(str2.indexOf("yash"));
console.log(str2.indexOf("A"));

// Method Chaining
console.log("Method Chaining:");
let str3="   My name is Nothing  ";
console.log(str2.toUpperCase().trim());
console.log(str2.trim().toUpperCase());

// Slice (return the part of string)
console.log("Slice:");
let str4="My name is Yash Verma";
let neww=str4.slice(7);
console.log(neww);
let newww=str4.slice(7,13);
console.log(newww);
let newwww=str4.slice(7,str4.length);
console.log(newwww);
// slice(-ve value) traverse from back with 1-indexed
let new2=str4.slice(-4);
console.log(new2);
