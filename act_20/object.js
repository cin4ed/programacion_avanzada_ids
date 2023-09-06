class Object {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
  }

  collidesWith(object) {
    return (
      object.x < this.x + this.size &&
      object.x + object.size > this.x &&
      object.y < this.y + this.size &&
      object.y + object.size > this.y
    );
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  }
}
