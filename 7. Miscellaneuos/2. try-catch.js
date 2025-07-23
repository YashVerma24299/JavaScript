//console.log(a);      ->give Error

try{
    console.log(a);
}catch{
    console.log("Variable does not define");
}



try{
    console.log(a);
}catch(yash){
    console.log("Variable does not define");
    console.log(yash);
}
// try{
//     console.log(a);
// }catch(err){
//     console.log("Variable does not define");
//     console.log(err);
// }



try {
    console.log(a);  // ReferenceError: a is not defined
} catch {
    console.log("Variable does not define");
} finally {
    console.log("Finally block executed");  // Always runs
}



try {
    console.log(a);  // ReferenceError: a is not defined
} catch (yash) {
    console.log("Variable does not define");
    console.log(yash); // logs the actual error: ReferenceError: a is not defined
} finally {
    console.log("Finally block executed");  // Always runs
}