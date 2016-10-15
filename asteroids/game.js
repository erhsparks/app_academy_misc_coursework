const Asteroid = require("./asteroid");

function Game () {
  this.DIM_X = 350;
  this.DIM_Y = 900;
  this.NUM_ASTEROIDS = 10;
  this.addAsteroids();
};

Game.prototype.addAsteroids = function () {
  this.asteroids = [];

  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    newAsteroid = this.randomAsteroid();
    this.asteroids.push(newAsteroid);
  }
};

Game.prototype.randomAsteroid = function () {
  return new Asteroid ({
    pos: [this.randomPosition(this.DIM_X), this.randomPosition(this.DIM_Y)]
  });
};

Game.prototype.randomPosition = function (dim) {
  let min = Math.ceil(0 + 20); //we had this.radius, which was out of scope for Game.
  let max = Math.floor(dim - 20);

  return Math.floor(Math.random() * (max - min)) + min;
};

Game.prototype.draw = function (context) {
  context.clearRect(0, 0, this.DIM_X, this.DIM_Y);

  this.asteroids.forEach ( asteroid => {
    console.log(asteroid);
    asteroid.draw(context);
  });
};

module.exports = Game;
