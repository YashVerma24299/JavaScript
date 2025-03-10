//PROMISES
//promises generally used to stop the callback hell(nesting condition)

// Single data check
// function savetoDb (data){
//     let internetSpeed= Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         console.log("Successfuly added!", data)
//     }else{
//         console.log("Failed to added!", data)
//     }
// }
// savetoDb("Yash");

//multiple data validity check
function savetoDb (data, success, failure){
    let internetSpeed= Math.floor(Math.random()*10)+1;
    if(internetSpeed>5){
        success();
    }else{
        failure();
    }
}
//These a concept of callback hell
savetoDb("Yash",
    () =>{
        console.log("Success 1");
        savetoDb("Verma",
            () =>{
                console.log("Success 2");
                savetoDb("Yash Verma",
                    () =>{
                        console.log("Success 3");
                    },
                    () =>{
                        console.log("Failue 3");
                    }
                )
            },
            () =>{
                console.log("Failue 2");
            }
        )
    },
    () =>{
        console.log("Failed 1");
    }
)




//Promises -> represent the success or failure of an asynchronous operation and its resulting value
//promises is an object
//promises has 2 funda
// 1. resolve=success
// 2. reject=failure

function savetoDataBase (data){

    // return new Promise((success, failure) =>{
    //     let internetSpeed= Math.floor(Math.random()*10)+1;
    //     if(internetSpeed>5){
    //         success("Success: Data was saved!");
    //     }else{
    //         failure("Failure: weak connection!");
    //     }
    // })
    return new Promise((resolve, reject) =>{
        let internetSpeed= Math.floor(Math.random()*10)+1;
        if(internetSpeed>5){
            resolve("Success: Data was saved!");
        }else{
            reject("Failure: weak connection!");
        }
    })

}
let check=savetoDataBase("Yash Verma"); // in inspect
console.log(check); // in inspect
