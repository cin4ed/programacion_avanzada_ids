class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  }
}
