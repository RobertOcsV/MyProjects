let seconds: number = 0;
let intervalId: number;

function updateTimer() {
    seconds++;
    const hours: number = Math.floor(seconds / 3600);
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const formattedTime: string = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

    const timerElement = document.getElementById('timer');
    if (timerElement !== null) {
        timerElement.textContent = formattedTime;
    }

    
}

const startButton = document.getElementById('startButton');
if (startButton !== null) {
    startButton.addEventListener('click', function() {
        intervalId = setInterval(updateTimer, 1000);
    });
}

const stopButton = document.getElementById('stopButton');

if (stopButton !== null) {
    stopButton.addEventListener('click', function() {
        clearInterval(intervalId);
    });
}


const resetButton = document.getElementById('resetButton');
        if (resetButton !== null) {
            resetButton.addEventListener('click', function() {
                clearInterval(intervalId);
                seconds = 0;
                const timerElement = document.getElementById('timer');
                
                if (timerElement !== null) {
                    timerElement.textContent = '00:00:00';
                }
            });
        }