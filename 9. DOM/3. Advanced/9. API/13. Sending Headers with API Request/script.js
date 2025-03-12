// In hoppscotch,
// Headers portion m jaakr -> api request kis form m shown ho select krsakte the
// like json ho, html ho, plain ho....



let url ="https://icanhazdadjoke.com/";

// 1. First, try these
// async function getfetch() {
//     try{
//         let res = await axios.get(url);
//         console.log(res.data); // shown data in html
//     }
//     catch(e){
//         console.log("Error:", e);
//     }
// }

//2. Secondly, try these
// async function getfetch() {
//     try{
//         let formatChange = {
//             headers:{
//                 Accept: "application/json"
//             }
//         };

//         let res = await axios.get(url, formatChange);
//         console.log(res.data); // shown data in JavaScript
//     }
//     catch(e){
//         console.log("Error:", e);
//     }
// }

getfetch();
