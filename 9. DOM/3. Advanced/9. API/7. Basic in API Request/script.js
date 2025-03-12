let url ="https://catfact.ninja/fact";
fetch (url); // return Promises
//In inspect,
//Go in "Network Section"
//Check fact
//Inside fact -> check headers, Preview, Response
//Above part in "network" and below part in "console"
//Below part also see in "network"




//if url is wrong
let url3 ="https://catfact.ninja/fact33333333";
fetch(url3)
    .then( (res)=>{
        console.log(res);
    })
    .catch( (err)=>{
        console.log("Error for url3:",err);
    })




//if url is right
let url2 ="https://catfact.ninja/fact";
fetch(url2)
    .then( (yash)=>{
        console.log("For url2: ",yash);
    })
    .catch( (err)=>{
        console.log(err);
    })
                    
