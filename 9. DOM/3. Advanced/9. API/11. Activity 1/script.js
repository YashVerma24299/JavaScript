let p= document.querySelector("p");
let button = document.querySelector("button");

let url ="https://catfact.ninja/fact";

button.addEventListener("click", async ()=>{
    let result= await getfetch();
    console.log(result);
    p.innerText = result;
})

async function getfetch() {
    try{
        let res = await axios.get(url);
        return res.data.fact; 
    }
    catch(e){
        console.log("Error:", e);
        return "NO FACT FOUND!!";
    }
}


