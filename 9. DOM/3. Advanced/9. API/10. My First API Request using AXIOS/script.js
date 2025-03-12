// Search axios github
// Go on first link
// Scroll and get the link.............
// <--- SEE MY HTML PART --->

// In Axios -> the data in the readable form 
// No need to parse the data
// No need to apply """.json()""" 



let url ="https://catfact.ninja/fact";
async function getfetch() {
    let res = await axios.get(url);
    console.log(res);
    console.log(res.data);
    console.log(res.data.fact);
    console.log(res.data.length);
}
getfetch();
//Agr koi error aajai tho uske liyy try-catch lagaoo 



async function getfetch2() {
    try{
        let res = await axios.get(url);
        console.log(res);
        console.log(res.data);
        console.log(res.data.fact);
        console.log(res.data.length);
    }
    catch(e){
        console.log("Error:", e);
    }
}
getfetch2();