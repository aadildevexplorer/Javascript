// setInterval() setInterval() JavaScript ka ek timer function hai jo kisi
// function ko bar-bar repeat karta hai ek fixed time interval ke baad.

const clock = document.getElementById("clock");
const savedTime = localStorage.getItem("clock");
if (savedTime) {
  clock.innerHTML = savedTime;
}

setInterval(function () {
  const time = new Date().toLocaleTimeString();
  clock.innerHTML = time;
  localStorage.setItem("clock", time);
}, 1000);
