var resetBtn = document.querySelector('#reset')
var startBtn = document.querySelector('#start')
var pauseBtn = document.querySelector('#pause')

var seconds = 0
var timerId = setInterval( updateTime, 1000 );

var updateTime = function() {
// increment the seconds
  var time = seconds++;
//insert value into #timer element
  document.getElementById('timer').innerHTML = time;
}


resetBtn.addEventListener("click", function(){
    clearInterval(timerId);
    seconds = 0;
    document.getElementById('timer').innerHTML = 'Stop Watch'
});
startBtn.addEventListener("click", function(){
  document.getElementById('timer').innerHTML = seconds
    timerId = setInterval( updateTime, 1000 );
});

pauseBtn.addEventListener("click", function(){
    clearInterval(timerId);
});
