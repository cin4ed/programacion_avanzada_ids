class Player {
  constructor(x = 0, y = 0, s = 25, color = "black", speed = 5) {
    this.x = x;
    this.y = y;
    this.width = s;
    this.height = s;
    this.direction = "idle";
    this.color = color;
    this.speed = speed;
  }

  input(event) {
    if (event.type == "keydown") {
      switch (event.key) {
        case "ArrowDown":
          this.direction = "down";
          break;
        case "ArrowUp":
          this.direction = "up";
          break;
        case "ArrowLeft":
          this.direction = "left";
          break;
        case "ArrowRight":
          this.direction = "right";
          break;
      }
    }
  }

  collidesWith(object) {
    return (
      player.x < object.x + object.width &&
      player.x + player.width > object.x &&
      player.y < object.y + object.height &&
      player.y + player.height > object.y
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.closePath();
  }
}
