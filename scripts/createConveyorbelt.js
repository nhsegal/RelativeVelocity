function createConveyorbelt() {
  let positionX = width / 2;
  let positionY = height / 2;
  let velocityX = 0;
  let lineNumber = 300;

  const display = () => {
    textSize(22);
    fill(200);
    noStroke();
    push();
    translate(positionX, positionY);
    rect(-positionX, 0, width * 80, height / 16);
    for (let i = -lineNumber / 2; i < lineNumber / 2; i++) {
      stroke(160);
      strokeWeight(1);
      line(
        spacing * 0.8 * i - 40,
        -height / 32,
        spacing * 0.8 * i,
        height / 32
      );
      stroke(1);
      line(spacing * 0.8 * i, height / 32, spacing * 0.8 * i, height / 32 - 10);

      if (i % 5 === 0) {
        noStroke();
        fill(100);
        text(
          `${(i * 10).toFixed(0)} cm`,
          spacing * 0.8 * i + 40,
          height / 32 + 24
        );
      }
    }
    pop();
  };

  const move = () => {
    positionX = positionX + velocityX;
  };

  const setVelocity = (val) => {
    velocityX = val;
  };

  const reset = () => {
    positionX = width / 2;
    velocityX = 0;
    beltVelocitySlider.value(0);
  };

  return { display, move, setVelocity, reset };
}
