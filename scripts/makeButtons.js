const makeButtons = () => {
  resetButton = createButton('');
  resetButton.size(160, 80);
  resetButton.id('resetbutton');
  resetButton.parent('canvasDiv');
  resetButton.position(618, -145, 'relative');
  resetButton.mousePressed(() => {
    car.reset();
    belt.reset();
    clock = 0;
    paused = true;
    rewind = false;
    loop();
  });

  playButton = createButton('');
  playButton.size(160, 80);
  playButton.id('playbutton');
  playButton.addClass('paused');
  playButton.parent('canvasDiv');
  playButton.position(710, -245, 'relative');

  playButton.mousePressed(() => {
    if (paused) {
      playButton.removeClass('paused');
      playButton.addClass('unpaused');
      paused = false;
    } else {
      playButton.removeClass('unpaused');
      playButton.addClass('paused');
      paused = true;
    }
  });

  forwardButton = createButton('');
  forwardButton.size(70, 35);
  forwardButton.id('forwardbutton');
  forwardButton.parent('canvasDiv');
  forwardButton.position(640, -205, 'relative');
 
  forwardButton.mousePressed(() => {
    rewind = false;
    noLoop();
    paused = false;
    draw();
    paused = true;
    loop();
  });

  backwardButton = createButton('');
  backwardButton.size(70, 35);
  backwardButton.id('backwardbutton');
  backwardButton.parent('canvasDiv');
  backwardButton.position(480, -205, 'relative');
  backwardButton.mousePressed(() => {
    rewind = true;
    noLoop();
    paused = false;
    draw();
    paused = true;
    rewind = false;
    loop();
  });
};
