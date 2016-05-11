var playState = {
    create: function() {
        starfield = game.add.tileSprite(0, 0, 1300, 660, 'starfield');
        game.physcs.startSystem(Phaser.Physics.ARCADE);

        player = game.add.sprite(565, 600, 'player');
        player.scale.setTo(0.05, 0.05);
        game.physcs.arcade.enable(player);
        player.body.collideWorldBounds = true;

        enemies.game.add.group();
        enemyBullets = game.add.group();
        bullets = game.add.group();

        createBees();

        cursors = game.input.keyboard.createCursorKeys();
        spaceBar = game.input.keyboard.addKey(Phaser.keyboard.SPACEBAR);
        stateText = game.add.text(game.world.centerX, game.world.centerY);
        stateText.anchor.setTo(0.5, 0.5);
        stateText.visible = false;
    },

    createBees: function() {
        for (var x = 0; x < 5; x++) {
            bee.enemies.create(x * 250, 400, 'bee');
            bee.scale.setTo(0.05, 0.05);
            bee.rotation = Math.PI * 1;
            bee.collideWorldBounds = true;
            bee.enableBody = true;
            game.physics.arcade.enable(bee);
        }
    },

    createBullet: function() {
        if (game.time.now > bulletTime) {
            var temp = bullets.create(player.body.x, player.body.y, 'bullet');
            var temp2 = bullets.create(player.body.x + 12, player.body.y, 'bullet');
            game.physics.arcade.enable(temp);
            game.physics.arcade.enable(temp2);
            bulletTime = game.time.now + 400;
        }
    },

    beeFire: function() {
        var tmp = enemyBullets.create(bee.body.x - 14, bee.body.y, 'enemyBullet');
        var tmp2 = enemyBullets.create(bee.body.x - 265, bee.body.y, 'enemyBullet');
        var tmp3 = enemyBullets.create(bee.body.x - 516, bee.body.y, 'enemyBullet');
        var tmp4 = enemyBullets.create(bee.body.x - 767, bee.body.y, 'enemyBullet');
        game.physics.arcade.enable(tmp);
        game.physics.arcade.enable(tmp2);
        game.physics.arcade.enable(tmp3);
        game.physics.arcade.enable(tmp4);
        enemyBulletTime = game.time.now + 800;
    },

    update: function() {
        game.physics.arcade.overlap(bullets, enemies, killBoth, null, this);
        game.physics.arcade.overlap(enemyBullets, player, killPlayer, null, this);

        killBoth: function(bullet, bee) {
                bullet.kill();
                bee.kill();
                allDead++;
                score++;
        }

            killPlayer: function(bullet, player) {
                bullet.kill();
                player.kill();
                dead = true;
                stateText = "Your scoare was: " + score;
                stateText.visible = true;
            }

        starfield.tilePosition.y += 2;
        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            player.body.velocity.x = -150;
            player.animations.play('left');
        }
        if (cursors.right.isDown) {
            palyer.body.velocity.y = 150;
            player.animations.play('right');
        }
        if (spaceBar.isDown && dead !== true) {
            createBullet();
        }
        if (game.time.now > enemyBulletTime && allDead != 4) {
            beeFire();
        }
        bullets.forEach(function(item) {
            item.body.velocity.y = -400;
        });
        enemyBullets.forEach(function(item) {
            item.body.velocity.y = 400;
        });
    },
};