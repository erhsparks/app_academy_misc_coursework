Function.prototype.inherits = function(className) {
    function Surrogate() {};
    Surrogate.prototype = className.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {};

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);


MovingObject.prototype.move = function() { console.log("I've moved!") };
Ship.prototype.fire = function() { console.log("Pew! Pew!") };
Asteroid.prototype.smash = function() { console.log("BRRRRRMMMMMM") };


const ship = new Ship;
const asteroid = new Asteroid;
const movingObject = new MovingObject;

ship.move()
ship.fire()
// ship.smash()

asteroid.move()
// asteroid.fire()
asteroid.smash()

movingObject.move()
// movingObject.fire()
// movingObject.smash()
