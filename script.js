// 🎉 Countdown Timer
const timer = document.getElementById("timer");

// Change to her real birthday date (Year, Month-1, Day, Hour, Minute)
const birthday = new Date("Oct 31, 2025 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;
  } else {
    timer.innerHTML = "🎂 It's Your Birthday! 🎉";
  }
}, 1000);

// 🎈 Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startSurprise() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 150 + 50,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      tilt: Math.floor(Math.random() * 10) - 10,
    });
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((p, i) => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.r, p.r);
    ctx.closePath();

    p.y += Math.cos(p.d) + 1 + p.r/2;
    p.x += Math.sin(p.d);

    if (p.y > canvas.height) {
      confetti[i] = {
        x: Math.random() * canvas.width,
        y: -10,
        r: p.r,
        d: p.d,
        color: p.color,
        tilt: p.tilt,
      };
    }
  });
  requestAnimationFrame(draw);
}