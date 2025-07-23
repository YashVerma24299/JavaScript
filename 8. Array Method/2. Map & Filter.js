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



// 🔹 map():
// Returns a new array where each element is "transformed" based on a callback.              important
// Always returns an array with the same length as the original array.

// 🔹 filter():
// Returns a new array with "only the elements that pass the truthy test".                    important
// The length may be less than or equal to the original array


// 1. Square all even numbers in an array
            // Wrong code
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter((i)=>{
//     if( i%2==0 && (i*i)%2==0) return i*i;
// })
// console.log(result);
            // Corrected Code
// let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.filter(num => num % 2 === 0).map(num => num * num);
// number jab even hoga tbhi ye aaage bhadke map ko call krpaaiga
// console.log(result); // [4, 16, 36]
