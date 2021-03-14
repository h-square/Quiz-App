(function handleTimerCountDown(){
    let hours = 3;
    let minutes = 0;
    let seconds = 0;

    let setIntervalOneSec = setInterval(subtractASecond, 1000);

    function subtractASecond(){
        seconds-=1;
        if(seconds < 0){
            seconds = 59;
            minutes-=1;
            if(minutes < 0){
                minutes = 59;
                hours-=1;
                if(hours < 0){
                    clearInterval(setIntervalOneSec);
                    alert("Your time is up!")
                    //close the test after time after timer ends
                    window.close();
                }
            }
        }
        document.getElementById("timerCountdown").innerHTML = ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
    };
})();