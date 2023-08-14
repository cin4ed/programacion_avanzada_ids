const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(150, 20);
ctx.lineTo(210, 80);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "rgb(255,153,255)";
ctx.moveTo(150, 60);
ctx.lineTo(210, 120);
ctx.lineTo(90, 120);

ctx.fill();
