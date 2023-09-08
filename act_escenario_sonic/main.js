const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

const scenarioImg = new Image();
scenarioImg.src = "escenario.png";
scenarioImg.onload = function () {
  ctx.drawImage(scenarioImg, 3130, 25, 500, 472, 0, 0, 500, 475);

  const ringImg = new Image();
  ringImg.src = "ring.webp";
  ringImg.onload = function () {
    ctx.drawImage(
      ringImg,
      0,
      0,
      ringImg.width,
      ringImg.height,
      100,
      350,
      20,
      20
    );
    ctx.drawImage(
      ringImg,
      0,
      0,
      ringImg.width,
      ringImg.height,
      125,
      365,
      20,
      20
    );
    ctx.drawImage(
      ringImg,
      0,
      0,
      ringImg.width,
      ringImg.height,
      165,
      375,
      20,
      20
    );
    ctx.drawImage(
      ringImg,
      0,
      0,
      ringImg.width,
      ringImg.height,
      195,
      380,
      20,
      20
    );
  };
};
