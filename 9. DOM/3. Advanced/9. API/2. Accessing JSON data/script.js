let yash= '{"message":"https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-5.jpg","status":"success"}';

//PARSE A JSON STRING DATA INTO JAVASCRIPT OBJECT
//In short, string convert into object 
let valResponse = JSON.parse(yash);
console.log(valResponse);
console.log(valResponse.message);
console.log(valResponse.status);
valResponse.newData="newInsertData";
console.log(valResponse);


//PARSE A JAVASCRIPT OBJECT INTO JSON STRING DATA
//In short, object convert into json string
let student = {
    firstName: "Yash",
    lastName: "Verma",
    age: 20,
    roll_no: "PCE******7",
    gender: "male",
    cgpa: 9.4,
    color: ["red", "greeen", "blue"]
};
let valRes = JSON.stringify(student);
console.log(valRes);