let url ="https://catfact.ninja/fact";

async function getfetch() {
    let result = await fetch(url);
    console.log(result);

        //pending request dega ye............
    // let data = result.json();
    // console.log(data);

    let data1 = await result.json();
    console.log("For Data 1:",data1);

    let result2 = await fetch(url);
    console.log(result2);
    let data2 = await result2.json();
    console.log("For Data 2:", data2);
}

getfetch();