const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*15)


const question = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const scoreEl = document.getElementById("score");
const alertSuccess = document.querySelector(".alert-success");
 alerWarning = document.querySelector(".alert-warning");



let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEl.innerText = `score: ${score}`


question.innerText = `${num1} x ${num2} Sonucu Nedir?`

const correctAns = num1 * num2;

form.addEventListener("submit",()=>{ 
 const userAns = +input.value
 if(userAns === correctAns){
    input.classList.add("dogru")
    score++;
    updatelocalStorage()

 }else{
    input.classList.add("yanlis")
    score--;
    updatelocalStorage()

 }

});

function updatelocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score))
}

