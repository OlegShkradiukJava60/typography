const orbitCircle = document.getElementById('orbit');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

// Включить анимацию
startButton.addEventListener('click', () => {
    orbitCircle.style.animationPlayState = 'running';
});

// Выключить анимацию
stopButton.addEventListener('click', () => {
    orbitCircle.style.animationPlayState = 'paused';
});

// let boxAnimetionElement = document.getElementById("orbit")
// function startStop(){

// }