
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
var pattern = [];
var clueLength = 10;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;
var min = 1;
var max = 5;
var Strike = 0;
var audio = document.getElementById("xatu");
let timer = null;
var maxtime = 20;
var reset = false;

function RandomNum(max) {
 return Math.floor(Math.random() * Math.floor(max) + 1); 
}
function startgame(){
  pattern = []; 
for (var i =0; i < clueLength; i ++) {
  pattern.push(RandomNum(5));
}
console.log('pattern: ' + pattern);
  progress = 0;
  Strike = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");  
  playClueSequence();
}
function stopgame(){
  clueHoldTime=1000;
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
  reset=true;

}


function playTone(btn,len){
  //o.frequency.value = freqMap[btn]
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025) 
  startTone(btn)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    //o.frequency.value = freqMap[btn]
    if(btn == 1){
     audio = document.getElementById("xatu");
      audio.currentTime = 1;
      audio.play();
      console.log("played");
  }else if (btn == 2){
    audio = document.getElementById("wubba");
    audio.currentTime = 1;
    audio.play();
  }else if (btn == 3){
    audio = document.getElementById("plusle");
    audio.currentTime = 1;
    audio.play();
  }else if (btn == 4){
    audio = document.getElementById("pikachu");
    audio.currentTime = 1;
    audio.play();
  }else if (btn == 5){
    audio = document.getElementById("chimchar");
    audio.currentTime = 1;
    audio.play();
    
    
  }
  tonePlaying = true
  
}
}
 
  
function stopTone(){
  //g.gain.setTargetAtTime(0,context.currentTime + 0.05, 0.025)
  audio.currentTime = 1;
  audio.pause();
  tonePlaying = false
}



function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
    guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i<=progress;i++){
    console.log("play single clue: " + pattern[i] + "in" + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime -= 10
  }  
  maxtime = 20;
  reset = false;
  clearInterval(timer);
  timer = setInterval(timeremain, 1000);
  
}

function loseGame(){
  stopgame();
  alert ("Game over. You lost.")
  
}

function winGame (){
  stopgame();
  alert ("Game over. You Won!")
}

function guess(btn){
  console.log("user guessed: " +btn);
  if(!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (guessCounter == pattern.length - 1){
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++
    }
  } else{
    alert ("Strike!")
    Strike++
  }
  if (Strike == 3){
    reset = true;
    loseGame();
  }
}

function timeremain() {
    document.getElementById("clock").innerHTML =
      "Time Remaining: " + maxtime ;
    maxtime -= 1; 
    if (maxtime < 0 || reset) {
      if(!reset) {
        stopgame(); 
        alert("Time is up. You lost.");
      }
      resetTimer();
      clearInterval(timer);
    }
}
function resetTimer(){
  maxtime = 20;
  document.getElementById("clock").innerHTML = "Time Remaining: 0 s";
}


var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)