const adviceNum = document.getElementById("advice-id-number");
const advice = document.getElementById("advice");
const newAdvice = document.getElementById("new-advice");

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((body) => {
            console.log(body);
            adviceNum.innerHTML = body.slip.id;
            advice.innerHTML = body.slip.advice;
        });
}

generateAdvice();

newAdvice.addEventListener("click", () => {
    generateAdvice();
});
