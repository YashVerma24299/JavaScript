let url = "http://universities.hipolabs.com/search?name=";

document.querySelector("button").addEventListener("click", async()=>{
    let input = document.querySelector("input");
    let country = input.value;

    let list = document.querySelector("ul");
    list.innerText = "";

    let collegeArray = await get(country);

    for( college of collegeArray){
        let li=document.createElement("li");
        console.log(college.name);
        li.innerText = college.name;
        list.appendChild(li);
    }


})

async function get(country){
    try{
        let result = await axios.get(url+country);
        return result.data;
    }
    catch(e){
        console.log("Error:--" , e);
        return [];
    }
}



