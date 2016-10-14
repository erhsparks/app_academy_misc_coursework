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


MovingObject.prototype.move = function(){ console.log("I've moved!")}
