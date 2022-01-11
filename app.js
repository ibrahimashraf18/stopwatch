hours = 0;
min = 0;
sec = 0;

var displayMin = document.getElementById("counter")

var interval;

function startTime(){

    var countTime = prompt('Plz Enter Your Time In Seconds');

    interval = setInterval(function () {
        countTime--;
        if (countTime >= 0) {
            id = document.getElementById("counter");
            id.innerHTML = countTime;

        }
        if(countTime === 0){
            id.innerHTML= "Complete";
        }
    
    }, 1000);
}
function pauseTime() {
    clearInterval(interval);
}
function resetTime() {
    pauseTime()
    hours = 0;
    min = 0;
    sec = 0;

    displayMin.innerHTML = min;
   
}