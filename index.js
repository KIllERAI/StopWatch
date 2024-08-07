const display = document.getElementById("display"); // Fix capitalization
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; 

function Start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true; // Set isRunning to true when the timer starts
    }
}

function Stop() {
    if (isRunning) {
        clearInterval(timer);   
        elapsedTime = Date.now() - startTime;
        isRunning = false; // Set isRunning to false when the timer stops
    }
}

function Reset() {
    clearInterval(timer);
    startTime = 0; // Reset startTime
    elapsedTime = 0; // Reset elapsedTime
    isRunning = false; // Reset isRunning
    display.textContent = "00:00:00:00"; // Reset display to initial value
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // Corrected time calculation
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
