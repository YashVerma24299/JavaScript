function saved(data){

    return new Promise((resolve, reject) =>{
        let speed =Math.floor(Math.random()*10)+1;
        if(speed>4){
            resolve("Inside resolve jobhi hai vhi result hai");
        }
        else{
            reject("Inside reject jobhi hai vhi error hai");
        }
    })
    
}

saved("Yash")
    .then( (result)=>{
        console.log("Data1 Resolved");
        console.log("Result: ",result);
        return saved("Verma");
    })
    .then( (res)=>{
        console.log("Data2 Resolved");
        console.log("Result: ",res);
        return saved("Yash Verma");
    })
    .then( (yashhhh)=>{
        console.log("Data3 Resolved");
        console.log("Result: ",yashhhh);
    })
    .catch( (err)=>{
        console.log("Promise/Data Reject");
        console.log("Error: ",err);
    })