let h1= document.querySelector("h1");
function changecolor(color,delay){
    return new Promise((resolve, reject) =>{
        let num= Math.floor(Math.random()*10)+1;
        if(num>4){
            reject("Inside reject waala");
        }
        setTimeout ( ()=>{
            h1.style.color=color;
            resolve();
        },delay)
    })
}

// async function demo() {
//     await changecolor("red",6000);
//     await changecolor("purple",1000);
//     await changecolor("orange",5000);
//     await changecolor("pink",1000);
//     await changecolor("aqua",1000);

//     console.log(10);
// }

// demo();

//Due to this part,
//error occur and it stop the code .
//In short, error ki vgh se aage ka execution ruk gyaaaa
// let num= Math.floor(Math.random()*10)+1;
// if(num>4){
//     reject();
// }

//SO, for handle this we prefer try-catch
async function demo() {
    try{
        await changecolor("red",6000);
        await changecolor("purple",1000);
        await changecolor("orange",5000);
        await changecolor("pink",1000);
        await changecolor("aqua",1000);
    }
    catch(err){
        console.log("Error:", err)
    }
    console.log(10);
}

demo();