const text = document.querySelector('#text');
const container = document.querySelector('.container');
const timeBreath = document.querySelector('#time');

const breathIn = 4000;
const hold = 7000;
const breathOut = 8000;
const totalBreath = breathIn + breathOut + hold;


breathAnimation();
setInterval(breathAnimation, totalBreath);

function breathAnimation(){
    text.innerText = 'Breathe in for';
    timer(breathIn);
    container.className = 'container grow';
    setTimeout(() => {
        text.innerText = 'Hold for'
        timer(hold);
        setTimeout(() => {
            text.innerText = 'Breath out for';
            timer(breathOut);
            container.className = 'container shrink';
        }, hold);
    }, breathIn);
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

function timer(time){
    let counter = time / 1000;
    timeBreath.innerText = counter;
    let refreshId = setInterval (() => {
        counter--;
        timeBreath.innerText = counter;
    }, 1000, 1);
    setTimeout(() => clearInterval(refreshId), time);
}