let array= [1,2,3,4,5,6];

//method 1
array.forEach(function (i){
    console.log(i);
});


//method 2
function printt(i){
    console.log(i);
}
array.forEach(printt);


//method 3
let printAll = (e) =>{
    console.log(e);
}
array.forEach(printAll);


// method 4
array.forEach( (i) =>{
    console.log(i);
});


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
student.forEach( (ele) =>{
    console.log(ele.marks);
})