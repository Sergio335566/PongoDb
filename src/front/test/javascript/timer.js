//TIMER
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    return {
      'total': t,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    console.log("clock id =" + id);
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        //timer a 0
        if (t.total <= 0) {
            console.log('fin du timer');
            setTimeout(function endOfGame(){
                if (playerScore.text > player2Score.text){
                    alert("You win bro !");
                } else if (playerScore.text < player2Score.text){
                    alert("You lose ...");
                } else {
                    alert("Égalité");
                }
            }, 500);
            clearInterval(timeinterval);
            endOfGame();
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 200 * 1000);
  initializeClock('clockdiv', deadline);
