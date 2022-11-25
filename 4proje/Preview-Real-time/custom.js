const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const totalRemaing = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", ()=> {
   update()
})

function update(){
   totalCounter.innerText = textarea.value.length;

   totalRemaing.innerText = 
   textarea.getAttribute("maxlength") - textarea.value.length;
   
}

update()