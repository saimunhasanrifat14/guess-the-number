const userinput = document.querySelector("#userInput")
const form = document.querySelector('form')
let rendomNumber = Math.round(Math.random() * 20)
let againBtn = document.getElementsByClassName(".headerTopAgainBtn")
const againButton = document.querySelector('.headerTopAgainBtn');
let score = document.querySelector("#score");
let highscore = document.querySelector("#highscore");
let scoreCount = 20;

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
        highscore.innerHTML = scoreCount - 1;
    }
    scoreCount--;
    score.textContent = scoreCount
    userinput.value = ''
});

againButton.addEventListener('click', function() {
    document.querySelector(".guessing").innerHTML = "Start guessing...";
    document.querySelector("body").style.backgroundColor = "#181818"
    document.querySelector(".number").innerHTML = "?"
    score.textContent = 20;
});