const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let pause = false;

let score = 0;
const scoreSound = new Audio("score_effect.mp3");
const player = new Player(0, 0, 50, "black");
const object = new Object(100, 100);
const obstacles = [];
obstacles.push(new Obstacle(200, 200, 200, 40));
obstacles.push(new Obstacle(200, 400, 200, 40));

addEventListener("keydown", (event) => {
  if (event.key == " ") {
    pause = !pause;
  } else {
    player.input(event);
  }
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Display objects
  player.draw(ctx);
  object.draw(ctx);
  obstacles.forEach((obstacle) => obstacle.draw(ctx));

  // Display score
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 30);

  // Display pause
  if (pause) {
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Paused", canvas.width / 2 - 50, canvas.height / 2);
    return window.requestAnimationFrame(draw);
  }

  // Move player
  switch (player.direction) {
    case "idle":
      break;
    case "up":
      player.y -= player.speed;
      break;
    case "down":
      player.y += player.speed;
      break;
    case "left":
      player.x -= player.speed;
      break;
    case "right":
      player.x += player.speed;
      break;
    default:
      break;
  }

  // Reset player position if out of bounds
  if (player.x > canvas.width) player.x = -player.width;
  if (player.x < -player.width) player.x = canvas.width;
  if (player.y > canvas.height) player.y = -player.height;
  if (player.y < -player.hei) player.y = canvas.height;

  // Handle player and obstacle collision
  obstacles.forEach((obstacle) => {
    if (player.collidesWith(obstacle)) {
      switch (player.direction) {
        case "up":
          player.y = obstacle.y + obstacle.height;
          break;
        case "down":
          player.y = obstacle.y - player.height;
          break;
        case "left":
          player.x = obstacle.x + obstacle.width;
          break;
        case "right":
          player.x = obstacle.x - player.width;
          break;
        default:
          break;
      }
    }
  });

  // Handle score and object collision
  if (player.collidesWith(object)) {
    scoreSound.pause();
    scoreSound.currentTime = 0;
    scoreSound.play();

    score += 10;

    let objectOverlapping = true;
    while (objectOverlapping) {
      object.x = Math.random() * canvas.width;
      object.y = Math.random() * canvas.height;

      objectOverlapping = obstacles.some((obstacle) =>
        object.collidesWith(obstacle)
      );
    }
  }

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
