var menuState = {
    create: function() {
        var spaceKey = this.game.input;
        spaceKey.onDown.add(this.start, this);
        
        var style = {font: "30px Source Code Pro", fill: "#ffffff"};
        var x = game.world.width/2;
        var y = game.world.height/2;
        
        var textDisplay = this.game.add.text(x, y-50, "Click to start", style);
        textDisplay.anchor.setTo(0.5, 0.5);
        
        if (score > 0) {
            var scoreLabel = this.game.add.text(x, y+50, "score: " + score, style);
            scoreLabel.anchor.setTo(0.5, 0.5);
        }
    },
    start: function() {
        this.game.state.start('play');
    }
};