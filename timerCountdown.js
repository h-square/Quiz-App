(function(){
    (function handleCountDown(){
        var countDownDate = new Date();
        countDownDate.setHours(countDownDate.getHours() + 3);
        countDownDate.setSeconds(countDownDate.getSeconds() + 2);
        countDownDate = countDownDate.getTime();
        var intervalOneSec = setInterval(function(){
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("timerCountdown").innerHTML = ("0" + hours).slice(-2) + " : " + ("0" + minutes).slice(-2) + " : " + ("0" + seconds).slice(-2);
            if(distance < 0){
                clearInterval(intervalOneSec);
                alert("Your time is up!")
                //close the test after time after timer ends
                window.close();
            }
        },1000);
    })();
})();