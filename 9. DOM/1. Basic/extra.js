                                                //In the inspect
//console.dir(document); (shown properties)
//all ----> 8---->h1
//console.dir(document.all(8).innerText); ->spiderman(shown)
//document.all(8).innerText="yash";  ->yash(updated)



// Select Elements by ID (in inspect)
let img=document.getElementById("mainImg"); //select
console.dir(img) //see all property
img.src //access source
img.id //access id
img.src="creation_1.png" // update source image

let des=document.getElementById("description"); //select
des.innerText ="rtyhbhjkl" // update main text
des.tagName //access tagname


 
//Select Elements by CLASS (in inspect)
let old=document.getElementsByClassName("oldImg"); //return html collection
old
old[0] || document.getElementsByClassName("oldImg")[0];



//Select Elements by TAGNAME (in inspect)
let tag=document.getElementsByTagName("p");
let tag_img=document.getElementsByTagName("img");
let tag_li=document.getElementsByTagName("li");



//QuerySelectors
console.dir(document.querySelector("h1"));
console.dir(document.querySelectorAll("h1"));


                    // Logic
// getElementById("mainImg")	Only ID name (no #)	
// querySelector("#mainImg")	CSS selector (needs # for ID)


 
//Different Properties & Methods
let para= document.querySelector("p");
console.log(para);
console.dir(para);
para.innerText; //show actual content
para.innerHTML; //show full markup(inlcude html part)
para.textContent; //show full text(hidden content also show)
para.innerText="hi <b>Peter Parker</b>";
para.innerHTML="hi <b>Peter Parker</b>";



//Manipulating Attribute
//obj.getAttribute("id")               ->getters
//obj.setAttribute("id", new_value )   ->setters

let img=document.querySelector("img");
// both have same output
img.id; -> 'mainImg'
img.getAttribute("id") -> 'mainImg'

img.getAttribute("className")
img.getAttribute("src")

img.setAttribute("id", "yash") -> 'yash'
img.setAttribute("src", "assests/creation_3.jpeg" );



//Manipulating style (camelCase)
let temp=document.querySelector("h1");
temp.style
temp.style.color="green";
temp.style.backgroundColor="yellow";

//style using classList (tells ki kitti class hai uske pass)
//add
temp.classList; //(tell ki kitti class h, kya length hai aur kya value haii)
temp.classList.add("A", "B");
temp.classList.add("C");
temp.classList; //(length=3, value=A,B,C)

// IMPORTANT NOTE
// Maine css mai ek class banai joki (star)->color change krti hai, aur many style ko implement krti haiii
// classList.add ki mdd se maine ek nayi class add kri (star)
// bss jese hi class bni vse hi class ki property implement hogaii

temp.classList.remove("C");

// check class is present or not
temp.classList.contains("underline"); //output-false
temp.classList.contains("A"); //output-true

// toggle
// class hetho remove krdega
// class nhi hetho add krdega
temp.classList.toggle("yash");



//Navigation
//Adding element
//Remove element
