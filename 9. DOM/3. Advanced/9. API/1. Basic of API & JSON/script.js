//API -> Application Programming Interface

//user request api
//api respond user
//respond format -> JSON (JavaScript Object Notation)
//JSON data always in STRING form

// -> https://catfact.ninja/fact  -- sends random cat facts
// -> https://dog.ceo/api/breeds/image/random  -- sends dog images

//Understand more about "json" from this website
//https://www.json.org

//json ke code ko check krne kelia
// Search on google(many website) -> json validator
//check below code
// 1. {"message":"https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-5.jpg","status":"success"}
// 2. {message:"https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-5.jpg","status":"null"}

let yash= '{"message":"https:\/\/images.dog.ceo\/breeds\/shiba\/shiba-5.jpg","status":"success"}';
console.log(yash);
console.dir(yash);