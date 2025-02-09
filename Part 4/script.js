                    // For Loops
console.log("Table")
// for(let i=1; i<=10; i++){
//     console.log(5*i);
// }
for(let i=5; i<=50; i=i+5){
    console.log(i);
}
//Nested Loops
for(let i=0; i<2; i++){
    console.log(`Outer Loop ${i}`)
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

                    //While Loops
console.log("While Loops")
let val=1;
while(val<=5){
    console.log(val);
    val++;
}