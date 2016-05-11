var loadState = {
    preload: function() {
    game.load.image('player', 'images/galga.jpg');
    game.load.image('bullet', 'images/bullet.jpg');
    game.load.image('bee', 'images/galaga_bee.png');
    game.load.image('starfield', 'images/starfield.png');
    game.load.image('enemyBullet', 'images/bullet.jpg');
    },
    create: function() {
        this.game.state.start('menu');
    }
};