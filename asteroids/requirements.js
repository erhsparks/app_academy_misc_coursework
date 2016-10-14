const Asteroid = require ("./asteroid");
const Bullet = require ("./bullet");
const GameView = require ("./game_view");
const Game = require ("./game");
const MovingObject = require ("./moving_object");
const Ship = require ("./ship");
const Utils = require ("./utils");

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
const context = canvasEl.getContext("2d");
// new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);

const mover = new MovingObject({pos: [10,10], vel: [1,1], radius: 20, color: "#66ff33"});

window.mover = mover;
mover.draw(context);
