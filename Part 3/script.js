                        // String (srings are immutable)

// trim()-remove left and right whitespace
console.log("TRIM:");
let str="  Yash Verma ";
console.log(str.trim());

// upper and lower case
console.log("LOWERCASE & UPPERCASE:");
let str1="Ysh VermAA";
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// Indexof
console.log("Indexof:");
let str2="My name is YASHVERMA";
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
let new2=str4.slice(-4).toUpperCase();
console.log(new2);

// Replacing
let str5=" Ilove Coding love love";
console.log(str5.replace("love", "doo"));
console.log(str5.replaceAll("love", "doo"));

// Repeat
console.log(str5.repeat(3));
console.log(str5.repeat(3).toUpperCase());


                        // Array(mutable) ----------------JavaScipt Part3 (Arrays are Mutable)
console.log("Array");
let v=["firstName", "yash", "lastName", "verma", "89", 9.80, 888, true];
console.log(v);
console.log(typeof v);
console.log(v[0]);
console.log(v[8]);

// NEW LOGIC  (only on string not in number)
console.log(v[0][5]);
console.log(v[0][6]);
console.log(v[5][0]); //undefined

// Array property (push, pop, unshift, shift)
let namee=["yash", "mohit", "tannu"];
namee[6]="pulkit";
namee.push("prateek1"); //push to end
namee.push("prateek2"); //push to end
console.log(namee);
namee.pop();  //pop from end
console.log(namee);
namee.unshift("DON"); //add to start
console.log(namee);
namee.shift();        // delete from start
console.log(namee);

// indexOf :- give the index value of character
let color=["red", "yellow", "green", "pink", "white"];
console.log(color.indexOf("white"));
console.log(color.indexOf("black"));

//merge two arrays
console.log(color.concat(namee));

// slice same as string

//Splice (work on original set)
let colors=["red", "yellow", "blue", "orange", "pink", "white"];
colors.splice(4); //remove all elements that present after this index
console.log(colors);
colors.splice(0,1);
console.log(colors);
// (start Position,kitti value delete krni, kya add krna.....)
colors.splice(0,2,"violet", "grey", "purple");//ye 0 position se 2 delete krke 3value add kregaa
console.log(colors);
colors.splice(1,0,"YASH");//ye 1 position pr jaakr 0 value ko delete krke YASH add kregaa   (value added b/w the voilet and grey)
console.log(colors);

// sort (every value convert in string then sort apply)
let str11=["yash", "mohit", "xmax"];
let str111=['a', 'f', 'p', 'b'];
let num=[22,33,9,76,100]; 
str11.sort();
str111.sort();
num.sort(); //(every value convert in string then sort apply). So, not good for number array
console.log(str11);
console.log(str111);
console.log(num);

//Array Reference

// Nested Arrays or MultiDimensional
let n=[[1,2], [3,4], [5,6], [7,8,9,3,4]];
console.log(n);
console.log(n[3]);
console.log(n[3][2]);