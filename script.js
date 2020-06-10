const text = document.querySelector('#text');
const container = document.querySelector('.container');
const timeBreath = document.querySelector('#time');
const pointer = document.querySelector('.pointer');
const pointerC = document.querySelector('.pointer-container');
const button = document.querySelector('#start')

const breathIn = 4000;
const hold = 7000;
const breathOut = 8000;
const totalBreath = breathIn + breathOut + hold;

function start(){
    pointer.className = 'pointer start';
    button.className = 'start gone';
    pointerC.className = 'pointer-container start';
    breathAnimation();
    setInterval(breathAnimation, totalBreath);
}

function breathAnimation(){
    text.innerText = 'Breathe in for';
    countdown(breathIn, timeBreath);
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Hold for'
        countdown(hold, timeBreath);
        setTimeout(() => {
            text.innerText = 'Breath out for';
            countdown(breathOut, timeBreath);
            container.className = 'container shrink';
        }, hold);
    }, breathIn);
}


function countdown(time, element, string = null){
    let remaining = (time / 1000);    // Converts from ms
    element.innerText = remaining + string;
    remaining--;
    let timer = setInterval(() => {
        if (remaining < 1){
            clearInterval(timer);
        } else {
            element.innerText = remaining + string;
        }
        remaining--;
    }, 1000);
}

/*
function timer(){
    var start = Date.now();
    setInterval(() => {
        var delta = Date.now() - start; // milliseconds elapsed since start
        output(Math.floor(delta / 1000)); // in seconds
        // alternatively just show wall clock time:
        output(new Date().toUTCString());
    }, 1000); // update about every second
}
*/

/*
function timer(time){
    let counter = time / 1000;
    timeBreath.innerText = counter;
    let refreshId = setInterval (() => {
        counter--;
        timeBreath.innerText = counter;
    }, 1000, 1);
    setTimeout(() => clearInterval(refreshId), time);
}
*/