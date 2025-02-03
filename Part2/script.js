// Template Lintels
let pencil=10;
let eraser=40;
console.log("The cost of pencil and eraser is:",pencil+eraser,"Rupees");
result="The cost of pencil and eraser is: "+(pencil+eraser)+" Rupees";
console.log(result);
// ``(Back Ticks)
result1=`The cost of pencil and eraser is: ${pencil+eraser} Rupees`;
console.log(result1);

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

// Conditional Statement
// Logical (&&, ||, !)
console.log((6>100));
console.log(!(6>100));

// Truthy and Falsy
// FALSE:- false, 0, -0,""(empty string), Nan, Undefined, null
// TRUE:- Everyhting upr vaali value ke alawa, sbb true generally


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