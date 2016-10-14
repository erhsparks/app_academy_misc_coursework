const MovingObject = function(optionsHash) {
  this.pos = optionsHash.pos;
  this.vel = optionsHash.vel;
  this.radius = optionsHash.radius;
  this.color = optionsHash.color;
};

MovingObject.prototype.draw = function (context) {
  let x = this.pos[0];
  let y = this.pos[1];

  context.fillStyle = this.color;
  context.beginPath();

  context.arc(
    x,
    y,
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  context.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}
module.exports = MovingObject;
