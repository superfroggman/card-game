function onLoad() {
  let c = document.getElementById("canv");
  let ctx = c.getContext("2d");

  ctx.beginPath();
  ctx.rect(0, 0, 200, 100);
  ctx.fill();

  drawCard(ctx);
}

function drawCard(ctx) {
  ctx.beginPath();
  ctx.rect(0, 0, 100, 200);
  ctx.fillStyle = "aqua";
  ctx.fill();
}

//Draw rectangle
function drawRect(ctx, x, y, w, h, filled, color) {
  let defaultColor = "black";

  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  if (filled) ctx.fill();
  else ctx.stroke();

  ctx.strokeStyle = defaultColor;
  ctx.fillStyle = defaultColor;
}
