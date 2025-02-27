// Map syntax: let newArr=arr.map(function condition)
// map return a new array
let num=[1,2,3,4,5];
let ans=num.map( (i) =>{
    return i*5;
});
console.log(ans);


let student = [
    {
        namee:"yash1",
        marks: 99.567
    },
    {
        namee:"yash2",
        marks: 69
    },
    {
        namee:"yash3",
        marks: 45.88
    }
];
let cgpa =student.map ((ele) => {
    return (ele.marks/10);
})
console.log(cgpa);



//Filter Syntax: let newArr=arr.filter(truthy condition)
//if condition true then value added in array 
// otherwise, ignore it

let num1=[1,2,3,4,5,6,34];
let res=num1.filter( (i) =>{
    return i%2==0;
});
console.log(res);