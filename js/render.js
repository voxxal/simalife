export let render = {
  canvas: document.getElementById("game"),
  ctx: document.getElementById("game").getContext("2d"),
  gridSize: 28,
  grid(_x, _y) {
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    this.ctx.strokeStyle = "lightgrey";
    this.ctx.beginPath();
    for (var x = 0; x <= _x; x++) {
      this.ctx.moveTo(x * this.gridSize, 0);
      this.ctx.lineTo(x * this.gridSize, _y * this.gridSize);
    }
    for (var y = 0; y <= _y; y++) {
      this.ctx.moveTo(0, y * this.gridSize);
      this.ctx.lineTo(_x * this.gridSize, y * this.gridSize);
    }
    this.ctx.stroke();
  },
  tile(position, color = "black") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      position.x * this.gridSize,
      position.y * this.gridSize,
      this.gridSize,
      this.gridSize
    );
  },
};
