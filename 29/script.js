// Countdown for 1 day 7 hours 45 mins from now
let now = new Date().getTime();
let targetDate = now + (1*24*60*60*1000) + (7*60*60*1000) + (45*60*1000);

const countdown = document.getElementById("countdown");

setInterval(() => {
  let current = new Date().getTime();
  let diff = targetDate - current;

  if (diff < 0) {
    countdown.innerHTML = "Event Started!";
    return;
  }

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <div class="time-circle" style="background: #1A56DB">${days}<br><small>Days</small></div>
    <div class="time-circle" style="background: #EA5838">${hours}<br><small>Hours</small></div>
    <div class="time-circle" style="background: #FFD700; color:black">${minutes}<br><small>Min</small></div>
    <div class="time-circle" style="background: green">${seconds}<br><small>Sec</small></div>
  `;
}, 1000);

// Modal
const modal = document.getElementById("scheduleModal");
const btn1 = document.getElementById("scheduleBtn");
const btn2 = document.getElementById("scheduleBtn2");
const span = document.querySelector(".close");

btn1.onclick = () => modal.style.display = "flex";
btn2.onclick = () => modal.style.display = "flex";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

// Theme Toggle
const themeIcon = document.getElementById("themeIcon");
let darkMode = true;
themeIcon.onclick = () => {
  if (darkMode) {
    document.body.style.background = "white";
    document.body.style.color = "black";
    darkMode = false;
  } else {
    document.body.style.background = "#0F172A";
    document.body.style.color = "white";
    darkMode = true;
  }
}
