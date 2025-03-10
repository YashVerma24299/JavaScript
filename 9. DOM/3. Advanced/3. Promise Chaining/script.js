function saved(data){

    return new Promise((resolve, reject) =>{
        let speed =Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve();
        }
        else{
            reject();
        }
    })
    
}

// saved("Yash")
//     .then( ()=>{
//         console.log("Data1 Resolved");
//         saved("Verma")
//             .then( ()=>{
//                 console.log("Data2 Resolved");
//                 saved("Yash Verma")
//                     .then( ()=>{
//                         console.log("Data3 Resolved");
//                     })
//             })
//     })
//     .catch( ()=>{
//         console.log("Promise Reject");
//     })
saved("Yash")
    .then( ()=>{
        console.log("Data1 Resolved");
        return saved("Verma");
    })
    .then( ()=>{
        console.log("Data2 Resolved");
        return saved("Yash Verma");
    })
    .then( ()=>{
        console.log("Data3 Resolved");
    })
    .catch( ()=>{
        console.log("Promise Reject");
    })