const Utils = require("./utils");
const MovingObject = require("./moving_object");

const Asteroid = function(pos) {
  MovingObject.call(this, pos);
  this.radius = 20;
  this.color = "#d0e1e1";
  this.vel = [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)];
};

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
