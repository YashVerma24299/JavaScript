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


// ACTIVITY USING PROMPT  (RUN THESE)

// let word="Apple";
// let guess_word=prompt("Enter a Word");

// while(word!=guess_word && guess_word!="quit"){
//     guess_word=prompt("Try Again!");
// }
// if(word==guess_word){
//     console.log("Congratulaions!!")
// }
// else if(guess_word=="quit"){
//     console.log("You Quit the Game!")
// }


                    // Loops with array
console.log("Loops with array");
let namee=["Yash1", "Yash2", "Yash3"]
for(let i=0; i<namee.length; i++){
    console.log(i, namee[i]);
}

                    // Loops with Nested array
console.log("Loops with Nested array");
let namee2=[["Yash1", "Yash2", "Yash3"], ["Ritik1", "Ritik2"], ["Tannu1"]];
for(let i=0; i<namee2.length; i++){
    console.log(`Outer Loop ${i+1}`);
    for(let j=0; j<namee2[i].length; j++){
        console.log(j+1, namee2[i][j]);
    }
}

                    //For Of Loops
console.log("For of Loops");
let namee3=["Yash1", "Yash2", "Yash3"]
for(let i of namee3){
    console.log(i);
}
for(i of namee){
    console.log(i);
}
for(i of "YASHVERMA"){
    console.log(i);
}


// Good Logic
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

for (let val of arr) {
  console.log(val); // a, b...
}

for (let index in arr) {
  console.log(index); // 0, 1....
}