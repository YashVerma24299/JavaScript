let h1=document.querySelector("h1");

                    // Apply promises on callback hell
// function changecolor(color, delay, nextcolor){
//     setTimeout( ()=>{
//         h1.style.color=color;
//         if(nextcolor) nextcolor();
//     },delay);
// }

// changecolor("red", 1000, ()=>{
//     changecolor("orange", 1000, ()=>{
//         changecolor("pink", 1000, ()=>{
//             changecolor("blue", 1000, ()=>{
//                 changecolor("purple",1000);
//             });
//         });
//     });
// });

function changecolor(color,delay){
    return new Promise((resolve, reject) =>{
        setTimeout ( ()=>{
            h1.style.color=color;
            resolve("Color changed");
        },delay)
        //No chances of reject
    })
}

changecolor("red",1000)
    .then((result)=>{
        console.log(result);
        return changecolor("orange",1000);
    })
    .then((result)=>{
        console.log(result);
        return changecolor("aqua",1000);
    })
    .then((result)=>{
        console.log(result);
        return changecolor("purple",1000);
    })
    .then((result)=>{
        console.log(result);
    })
        //No need catch
    // .catch((err)=>{
    //     console.log(err);
    // })
    .catch((err)=>{
        console.log(err);
    })