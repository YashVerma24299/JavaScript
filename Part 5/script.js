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
console.log(classs.yash2);
console.log(classs.yash2.roll_no);


//Array of objects
//Objects does not have index
//Arrays have index
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
