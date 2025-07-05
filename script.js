
function BloodSplatter() {
  const colors = ['#8b0000', '#b30000', '#ff1a1a', '#4a0000'];
  const count = 25; 

  for (let i = 0; i < count; i++) {
    const blob = document.createElement("div");
    blob.classList.add("blood-blob");
    blob.style.background = colors[Math.floor(Math.random() * colors.length)];
    blob.style.left = `${Math.random() * window.innerWidth}px`;
    blob.style.top = `${Math.random() * window.innerHeight}px`;

    const scaleX = (Math.random() * 2 + 0.5).toFixed(2);
    const scaleY = (Math.random() * 0.5 + 0.2).toFixed(2);
    const rotate = Math.floor(Math.random() * 360);

    blob.style.transform = `scale(${scaleX}, ${scaleY}) rotate(${rotate}deg)`;

    document.body.appendChild(blob);

    setTimeout(() => blob.remove(), 5000); 
  }
}

window.addEventListener('load', BloodSplatter);

let originalTitle = document.title;

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.title = "🦇 Don’t leave me in the dark...";
  } else {
    document.title = originalTitle;
  }
});
