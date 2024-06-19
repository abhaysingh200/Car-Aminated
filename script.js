var start = document.getElementById('start');
var track = document.getElementsByClassName('track');
var w1 = document.getElementsByClassName('leftwheel');
var w2 = document.getElementsByClassName('rightwheel');
var car = document.getElementsByClassName('car');

var audio = document.createElement('audio');
audio.src='sound.mp3';
audio.loop=true;


start.addEventListener("click",()=>{
    if(start.innerText=="Play"){
    start.innerText="Pause";
    track[0].style.animationDuration = "0.3s";
    w1[0].style.animationDuration = "0.14s";
    w2[0].style.animationDuration = "0.14s";
    audio.play();
   }
   else{
    start.innerText="Play";
    track[0].style.animationDuration = "0s";
    w1[0].style.animationDuration = "0s";
    w2[0].style.animationDuration = "0s";
    audio.pause();
   }

});



