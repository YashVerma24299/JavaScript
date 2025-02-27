// Every/Sum= returns true if every element of array gives true for some conditions

let num= [1,2,3,4,5,6];

let check1=num.every( (ele) =>{
    return ele<8;
})
console.log(check1);

let check2=num.every( (ele) =>{
    return ele<4;
})
console.log(check2);