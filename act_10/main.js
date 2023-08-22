const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,200,200)";
ctx.fillRect(0, 0, 900, 500);

canvas.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  ctx.beginPath();
  ctx.fillStyle = "rgb(79, 100, 256)";
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
});
