//Opposite of Spread
//take no. of arguments and bundle them 

function sum(...yash){
    for(let i =0; i<yash.length; i++){
        console.log("You give:",yash[i]);
    }
}
sum(1,8);
sum(1,2,3,4);



//Destructuring
let names=["tony", "bruce", "steve", "peter", "hela", "loki"];
let first=names[0];
let second=names[1];
console.log(first,second);

let [f, s, other]=names;
console.log(f,s,other);

let [ff, ss, ...otherr]=names;
console.log(ff,ss,...otherr);
console.log(otherr);

let student = {
    firstName: "Yash",
    lastName: "Verma",
    age: 20,
    roll_no: "PCE******7",
    gender: "male",
    cgpa: 9.4,
    color: ["red", "greeen", "blue"],
};

let {age: A, color:C, city:D="mumbai"}=student;
console.log(A, C, D);
