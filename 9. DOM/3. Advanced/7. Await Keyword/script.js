//await
//Pauses the execution of its surrounding async fn until its promises is resolved or rejected
//await always inisde the async

let h1= document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve, reject) =>{
        setTimeout ( ()=>{
            h1.style.color=color;
            resolve();
        },delay)
        //No chances of reject
    })
}

// changecolor("red",1000)
//     .then((result)=>{
//         console.log(result);
//         return changecolor("orange",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changecolor("aqua",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//         return changecolor("purple",1000);
//     })
//     .then((result)=>{
//         console.log(result);
//     })

async function demo() {
    await changecolor("red",6000);
    await changecolor("purple",1000);
    await changecolor("orange",5000);
    await changecolor("pink",1000);
    await changecolor("aqua",1000);
}

demo();