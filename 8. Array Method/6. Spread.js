//Expands the value(individual value create)

let arr = [1,2,3,4,5];
console.log(...arr); //or console.log(1,2,3,4,5);     
console.log(Math.max(...arr));

console.log(arr); //In output array format shown (no individual value)


//spread with array lintels
let characters=[..."Yash", "Yash", "...Yash"];
console.log(characters);

let newarr=[...arr,...arr];
console.log(newarr);


//spread with object lintels
let student = [
    {
        namee:"yash1",
        marks: 9.567
    },
    {
        namee:"yash2",
        marks: 69
    },
    {
        namee:"yash3",
        marks: 95.88
    }
];
//copy
let info =[...student, { namee: "yash4", marks: 80 }];
console.log(info);

//modify
let modify=student.map( (ele)=>{
    if(ele.namee=="yash2"){
        return {...ele,marks:0};
    }else{
        return ele;
    }
})
console.log(modify);


//arr only have values
//now it convert into key-value
//key -> indexing
//value -> jo bhi value haiiii
let obj= {..."Visual"};
console.log(obj);