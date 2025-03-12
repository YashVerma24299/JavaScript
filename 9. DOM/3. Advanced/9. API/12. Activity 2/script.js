let img= document.querySelector("img");
let button = document.querySelector("button");

let url ="https://dog.ceo/api/breeds/image/random";

button.addEventListener("click", async ()=>{
    let link= await getfetch();
    console.log(link);
    img.src = link;
    // img.setAttribute("src",link);
})

async function getfetch() {
    try{
        let res = await axios.get(url);
        return res.data.message; 
    }
    catch(e){
        console.log("Error:", e);
        return "/";
    }
}


