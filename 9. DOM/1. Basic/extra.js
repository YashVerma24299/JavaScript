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
a.innerText ="rtyhbhjkl" // update main text
a.tagName //access tagname


 
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


 

//Different Properties & Methods
let para= document.querySelector("p");
console.log(para);
console.dir(para);
para.innerText;
para.innerHTML;
para.textContent;