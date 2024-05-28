// script.js

document.addEventListener('DOMContentLoaded', () => {
    const buzzerButton = document.getElementById('btn');
    const buzzerSound = document.getElementById('buzzer-sound');

    buzzerButton.addEventListener('click', () => {
        buzzerSound.currentTime = 0; // Rewind to the start
        buzzerSound.play();
    });
});
