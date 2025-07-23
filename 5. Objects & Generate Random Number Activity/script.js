//Object 
let student = {
    firstName: "Yash",
    lastName: "Verma",
    age: 20,
    roll_no: "PCE******7",
    gender: "male",
    cgpa: 9.4,
    color: ["red", "greeen", "blue"],
    3: "ISKA MATLAB YE KOI INDEX NHI H.... YE BSS EK KEY HHH"
};
student.firstName="YASH";
student.new_color="ALL";  

console.log(student["firstName"]+ " "+student.lastName);

console.log(student.color[2]);

console.log(student[3]);

// delete a key
delete student.cgpa;
console.log(student);
// check if exist a key
console.log("age" in student); // true
console.log(student.hasOwnProperty("age")); //true
// Loop
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}


// Nested Object
console.log("Nested Object");
const classs = {
    yash1: {
        lastName:"verma",
    },
    yash1: { //update previous yash1
        lastName:"verma",
        cgpa: 9.45
    },
    yash2: {
        lastName:"Sharma",
        cgpa: 9.9,
        roll_no: 55
    }
};
delete classs.yash1;
console.log(classs);
console.log(classs.yash1);
console.log(classs.yash2);
console.log(classs['yash2']['roll_no']);
console.log(classs.yash2.roll_no);



//Array of objects    ->Objects does not have index    ->Arrays have index
console.log("Array of objects");
const classs2 = [
    {
        lastName:"verma",
    },
    {
        lastName:"verma",
        age:46,
        cgpa: 9.45
    },
];
console.log(classs2);
console.log(classs2[1].age);


// Object of Array
const data = {
    names: ["Yash", "Ritik"],
    ages: [21, 22]
};
console.log(data.names)
console.log(data.names[0]) 
console.log(data.ages[1]) 


// See thier magic in INSPECT
console.log(Math); // See thier magic in INSPECT
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-78));
console.log(Math.max(234.34,987));
console.log(Math.sqrt(9));
console.log(Math.pow(2,8));
console.log(Math.floor(8.9)); //nearest smallest value
console.log(Math.ceil(8.9));
console.log(Math.random());
console.log(Math.random()); //range 0 to 1 (1 -> exclusive)


//Generate random number
let num=Math.floor(Math.random()*10); //range 0 to 9
console.log(num);

let num2=Math.floor(Math.random()*5)+21; //range 21 to 25
console.log(num2);



                                            //GUESSING A RANDOM NUMBER GAME
// let max=prompt("Enter a max number");
// let random=Math.floor(Math.random()*max)+1;
// let guess=prompt("guess the number");

// while(true){
//     if(guess=="quit" || guess=="Quit"){
//         console.log("User quit the game");
//         break;
//     }
//     else if(guess==random){
//         console.log("You are Right! and random number was: ",guess);
//         break;
//     }else if(guess>random){
//         guess=prompt("hint: your guess was to large. Please try again");
//     }
//     else{
//         guess=prompt("hint: your guess was to small. Please try again")
//     }
// }