const secondsSpan = document.querySelector("#seconds");
const minutesSpan = document.querySelector("#minutes");
let secondsValue = 0;
let minutesValue = 0;
let currentChronometer;
let currentButtoon

function startChronometer(){
    currentButton = event.target;
    currentButton.disabled = true;
    currentChronometer = setInterval(() => {
        secondsValue += 1
        if (secondsValue === 60) {
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = minutesValue;
            minutesSpan.textContent = formatValue(minutesValue)
        }
        secondsSpan.textContent = formatValue(secondsValue);
    }, 1000);
}

function formatValue(value){
    return ("0" + value).slice(-2);
}

function stopChronometer(){
    currentButton.disabled = false;
    clearInterval(currentChronometer);
}

function resetChronometer(){
    secondsValue = 0;
    minutesValue = 0;
    secondsSpan.textContent = "00";
    minutesSpan.textContent = "00";
}