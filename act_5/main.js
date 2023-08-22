const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(200,200,200)";
ctx.fillRect(0, 0, 300, 150);

ctx.fillStyle = "rgb(246,103,77)";
ctx.fillRect(10, 10, 50, 50);

ctx.fillStyle = "rgba(65,68,162, .75)";
ctx.fillRect(30, 30, 50, 50);

ctx.beginPath();
ctx.fillStyle = "rgb(65,68,162)";
ctx.moveTo(150, 20);
ctx.lineTo(210, 80);
ctx.lineTo(90, 80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgb(220,58,57)";
ctx.moveTo(210, 10);
ctx.lineTo(270, 80);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "rgb(79, 213, 102)";
ctx.arc(50, 115, 25, 0, 2 * Math.PI);
ctx.fill();
ctx.strokeStyle = "rgb(246 103, 77)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(120, 115, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "rgb(246 103, 77)";
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.font = "30px Arial";
ctx.fillText("Hello world", 10, 145);
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.strokeText("Hello world", 10, 100);
ctx.closePath();
