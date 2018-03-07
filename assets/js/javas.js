(function() {
  $('.ham').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.navcontent').slideToggle();
  })
})();

// canvas
var canvas = document.querySelector('#bubbles');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;
var minRadius = 2;
var colourArray = [
  '#17468A',
  '#4C8DCA',
  '#78E5EB',
  '#F5F0F2',
  '#E12D53'
]

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init()

});

function Circle(x, y, dx, dy, radius, colorFill) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    c.fillStyle = colorFill
    c.fill();
  }

  this.update = function() {
    if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
      this.dx = -this.dx;
    }
    if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
      this.dy = -this.dy;
    }
    this.y = this.y + this.dy;
    this.x = this.x + this.dx;
    //interactivaity


    this.draw();
  }
}


var circleArray = [];

function init() {

  circleArray = [];
  //red dots
  for (var i = 0; i < 30; i++) {
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dy = (Math.random() - 0.5) * 2;
    var radius = Math.random() * 4 + 1;
    circleArray.push(new Circle(x, y, dx, dy, radius, colourArray[Math.floor(Math.random() * colourArray.length)]));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

init();

animate();
// Canvas end
