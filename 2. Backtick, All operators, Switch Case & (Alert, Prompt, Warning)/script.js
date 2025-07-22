                        // Template Lintels
let pencil=10;
let eraser=40;
console.log("The cost of pencil and eraser is:",pencil+eraser,"Rupees");
result="The cost of pencil and eraser is: "+(pencil+eraser)+" Rupees";
console.log(result);
// ``(Back Ticks)
result1=`The cost of pencil and eraser is: ${pencil+eraser} Rupees`;
console.log(result1);

let bio = `Name: Yash
Role: Web Developer
Fav Lang: JavaScript`;
console.log(bio);

let marks = 91;
console.log(`You are ${marks >= 90 ? 'a topper' : 'a learner'}`);



                        // Operators
// Arithmetic(+,-,%,/,**)
// Unary(++,--)
// Assignment(=,+=,-=,*=)

// Comparison(>,>=,<,<=,==,!=)
let age=18;
console.log(age>18);
console.log(age>=18);
console.log(5>8);
console.log(5==5);
console.log(5=="5");
console.log(5==="5"); //compare datatype as well by (===)
console.log(5===5);
// comparison for non-numbers
console.log('a'<'A'); //here, unicode of this value are compare
console.log('a'<'b'); //unicode value alg hoti hai ascii value se....
//GOOD LOGIC
let chars = ['b', 'a', 'C', 'B'];
chars.sort();
console.log(chars);  // Output: [ 'B', 'C', 'a', 'b' ]

// Conditional Statement
// Logical (&&, ||, !)
// Logical Operators as Control Tools //GOOD LOGIC
let isLoggedIn = true;
isLoggedIn && console.log("Welcome, Yash!"); 
console.log((6>100));
console.log(!(6>100));

// Truthy and Falsy
// FALSE:- false, 0, -0,""(empty string), Nan, Undefined, null
// TRUE:- Everyhting upr vaali value ke alawa, sbb true generally
console.log(null == undefined);   
console.log(null === undefined);  
console.log(false == 0);          
console.log(false === 0);         



// SwitchCase
let color="gree";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "Yellow":
        console.log("Slow");
        break;
    default:
        console.log("Broken Light");               
}



           // CHECK ON CONSOLE SIDE ALSOO
// Alert
// alert("This is used for pop message on window");
// alert() ➝ doesn’t return anything, so its result is undefined.
// let a=alert();
// console.log(a) ➝ just prints whatever a holds, which is undefined.


// Prompt
// let msg = prompt("Enter a message:");
// console.log(msg);


//Error
// console.error("generated error message")


//Warning
// console.warn("generated warning message")