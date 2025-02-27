//console.log(a);      ->give Error
console.log("start");
try{
    console.log(a);
}catch{
    console.log("Variable does not define");
}
console.log("end");

console.log("start");
try{
    console.log(a);
}catch(yash){
    console.log("Variable does not define");
    console.log(yash);
}
console.log("end");