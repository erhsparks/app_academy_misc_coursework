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

// const mover = new Asteroid({ pos: [10,10] });
const gameSetup = new Game();

// window.mover = mover;
window.game = gameSetup;

// for (let i = 1; i < 10; i++) {
  game.draw(context);
  // game.move();
// }
