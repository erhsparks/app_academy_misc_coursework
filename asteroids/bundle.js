/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__ (1);
	const Bullet = __webpack_require__ (4);
	const GameView = __webpack_require__ (5);
	const Game = __webpack_require__ (6);
	const MovingObject = __webpack_require__ (3);
	const Ship = __webpack_require__ (7);
	const Utils = __webpack_require__ (2);

	const canvasEl = document.getElementsByTagName("canvas")[0];
	canvasEl.height = window.innerHeight;
	canvasEl.width = window.innerWidth;
	const context = canvasEl.getContext("2d");
	// new Game(
	//   canvasEl.width,
	//   canvasEl.height
	// ).start(canvasEl);

	// const mover = new Asteroid({ pos: [10,10] });
	const gameSetup = new Game();

	// window.mover = mover;
	window.game = gameSetup;
	for (let i = 1; i < 10; i++) {
	  game.draw(context);
	  // game.move();
	}


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Utils = __webpack_require__(2);
	const MovingObject = __webpack_require__(3);

	function Asteroid (pos) {
	  MovingObject.call(this, pos);
	  this.radius = 20;
	  this.color = "#d0e1e1";
	  this.vel = Utils.randomVect;
	};

	Utils.inherits(Asteroid, MovingObject);

	module.exports = Asteroid;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const Utils = {
	  inherits (childClass, parentClass) {
	    function Surrogate() {};
	    Surrogate.prototype = parentClass.prototype;
	    childClass.prototype = new Surrogate();
	    childClass.prototype.constructor = childClass;
	  },

	  randomVect:
	    [Math.ceil(Math.random() * 50), Math.ceil(Math.random() * 50)]
	};


	module.exports = Utils;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function MovingObject (optionsHash) {
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


/***/ },
/* 4 */
/***/ function(module, exports) {

	
	function Bullet () {};




	module.exports = Bullet;


/***/ },
/* 5 */
/***/ function(module, exports) {

	
	function GameView () {};



	module.exports = GameView;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	const Asteroid = __webpack_require__(1);

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
	  let min = Math.ceil(0 + this.radius);
	  let max = Math.floor(dim - this.radius);

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


/***/ },
/* 7 */
/***/ function(module, exports) {

	
	function Ship () {};



	module.exports = Ship;


/***/ }
/******/ ]);