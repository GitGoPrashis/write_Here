const information = document.querySelector(".data");
const btn = document.querySelector(".btn");
let disc = document.querySelectorAll(".input-info");


btn.addEventListener("click",()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-info"
    inputbox.setAttribute("contenteditable","true");
    img.src ="https://www.freeiconspng.com/thumbs/remove-icon-png/remove-icon-png-26.png"

    information.appendChild(inputbox).appendChild(img);


})
information.addEventListener("click",function(e){

if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
}
    
})