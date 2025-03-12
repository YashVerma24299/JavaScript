let url ="https://catfact.ninja/fact";
                        //Both Same
// fetch(url)
//     .then( (yash)=>{
//         console.log(yash);
//         //Below part is used for read the data
//         yash.json()
//             .then((data1)=>{
//                 console.log("Data 1 in Object form: ",data1);
//                 console.log("Fact of data 1:",data1.fact);
//                 console.log("Length of data 1:",data1.length);
//             })
//     })
//     .catch( (err)=>{
//         console.log(err);
//     })
fetch(url)
    .then( (yash)=>{
        console.log(yash);
        //Below line is used for read the data
        return yash.json();
    })
    .then((data1)=>{
        console.log("Data 1 in Object form: ",data1);
        console.log("Fact of data 1:",data1.fact);
        console.log("Length of data 1:",data1.length);
        return fetch(url);
    })
    .then( (yash)=>{
        console.log(yash);
        return yash.json();
    })
    .then((data2)=>{
        console.log("Data 2 in Object form: ",data2);
        console.log("Fact of data 2:",data2.fact);
        console.log("Length of data 2:",data2.length);
    })
    .catch( (err)=>{
        console.log(err);
    })
