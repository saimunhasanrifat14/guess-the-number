const userinput = document.querySelector("#userInput")
const form = document.querySelector('form')
let rendomNumber = Math.round(Math.random() * 20)
let againBtn = document.getElementsByClassName(".headerTopAgainBtn")
const againButton = document.querySelector('.headerTopAgainBtn');
let score = document.querySelector("#score");
let scoreCount = 20;

againButton.addEventListener('click', function() {
  location.reload();
});

form.addEventListener("submit", () => {
    const userinputValue = +userinput.value
    if(userinputValue > rendomNumber){
        document.querySelector(".guessing").innerHTML = "📈 Too high"
    }
    else if(userinputValue < rendomNumber){
        document.querySelector(".guessing").innerHTML = "📉 Too low"
    }
    else{
        document.querySelector("body").style.backgroundColor = "#2dc000"
        document.querySelector(".guessing").innerHTML = "🥳 Correct Number"
        document.querySelector(".number").innerHTML = rendomNumber
    }
    scoreCount--;
    score.textContent = scoreCount
    userinput.value = ''
})



