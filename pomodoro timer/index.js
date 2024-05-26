const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500; // 25 minutes in seconds

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerEl.innerHTML = formattedTime; // Display the formatted time
}

function startTimer() {
    if (!interval) { // Prevent multiple intervals
        interval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimer();
                if (timeLeft === 0) {
                    clearInterval(interval);
                    interval = null;
                    alert("Time's up!");
                }
            }
        }, 1000);
    }
}

function stopTimer() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function resetTimer() {
    stopTimer();
    timeLeft = 1500; // Reset to initial 25 minutes
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);

// Initialize the display
updateTimer();
