var currentScale = 1.0;
var clickCount = 0;

function inflateBalloon() {
  var balloon = document.getElementById('balloon');
  clickCount++;

  if (clickCount <= 3) {
      currentScale += 0.5;
      balloon.style.transform = 'scale(' + currentScale + ')';

      if (clickCount === 3) {
          balloon.style.position = 'absolute';
          balloon.style.transition = 'none';
          // balloon.style.transition = 'scale'(currentScale);

          updateBalloonAnimation();
          balloon.classList.add('fly-animation');
      }
  }}

  function updateBalloonAnimation() {
      var balloon = document.getElementById('balloon');

      var randomX = Math.random() * 2 - 1; // Generate random value between -1 and 1
      var randomY = Math.random() * 2 - 1; // Generate random value between -1 and 1

      balloon.style.setProperty('--random-x-direction', randomX);
      balloon.style.setProperty('--random-y-direction', randomY);
  }