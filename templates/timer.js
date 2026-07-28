const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

let timeLeft = 0;
let interval;

const setTimer = () => {
    timeLeft =
    Number(hoursInput.value) * 3600 + Number(minutesInput.value) * 60 + Number(secondsInput.value);
}

const updateTimer = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    timer.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
 };

 const startTimer = () => {
    if (interval) return;

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(interval);
            interval = null;
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
};

const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    setTimer();
}

setTimer();

[hoursInput, minutesInput, secondsInput].forEach(input => { input.addEventListener("change", () => {
    if (!interval) {
        setTimer();
    }
});
});

start.addEventListener("click", startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener("click", resetTimer);