const start = doccument.getElementById("start");
const stop = doccument.getElementById("stop");
const reset = doccument.getElementById("reset");
const timer = doccument.getElementById("timer");

let timeleft = 1500;
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;

    timer.innerHTML = '$(minutes.toString().padStart(2,"0")):$(seconds)';
 };

 const startTimer = () => {
    interval = setInterval(() => {
        timerLeft--;
        updateTimer();

        if (timeLeft === 0){
            clearInterval(interval);
            alert("Times up!")
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener("click", resetTimer);