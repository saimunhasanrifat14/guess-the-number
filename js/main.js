const userinput = document.querySelector("#userInput")
const form = document.querySelector('form')
let rendomNumber = Math.round(Math.random() * 50)
let againBtn = document.getElementsByClassName(".headerTopAgainBtn")
const againButton = document.querySelector('.headerTopAgainBtn');

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
    userinput.value = ''
})


