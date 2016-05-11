var game = new Phaser.Game(1300, 660, Phaser.AUTO, 'game_div');

game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

var player;
var spaceBar;
var cursors;
var bulletTime = 4;
var starfield;
var dead = false;
var allDead = 0;
var livingEnemies = [];
var enemies;
var bee;
var bullets;
var enemyBullets;
var enemyBulletTime = 4;
var stateText;
var score = 0;

game.state.start('load');