function Player() {
    powerupjs.SpriteGameObject.call(this);

    this.sprite = sprites.player;
    this.crash = sprites.crash;

    //this.origin = new powerupjs.Vector2(-190 + 32 , -450);
    this.position.x = 158;
    this.position.y = 450;
    this.newPositionX = this.position.x;
    this.velocity = new powerupjs.Vector2(0,0);
    this.flying = new powerupjs.Vector2(-200, 0);
    this.timePlayer = 0;
    this.updating = false;
    this.alive = true;
    this.collisionBox = new powerupjs.Rectangle(this.position.x, this.position.y, 32, 40);
    sounds.engine.volume = 0.1;;
    sounds.engine.play();
}

Player.prototype = Object.create(powerupjs.SpriteGameObject.prototype); // needed for proper inheritance in JavaScript

Player.prototype.handleInput = function () {
    
    if ((powerupjs.Keyboard.pressed(powerupjs.Keys.left) === true) && this.updating === false && Math.round(this.position.x) > 30) {
        this.newPositionX = this.position.x - 64;
        this.velocity.addTo(this.flying);
    }

    if ((powerupjs.Keyboard.pressed(powerupjs.Keys.right) === true) && this.updating === false && Math.round(this.position.x) < 286) {
        this.newPositionX = this.position.x + 64;
        this.velocity.addTo(this.flying);
    }
};

var enemies = [];

Player.prototype.update = function (delta) {
    this.collisionBox.x = this.position.x + 16;
    this.collisionBox.y = this.position.y;

    this.timePlayer += delta;

    if(this.timePlayer> 1){
        this.timePlayer = 0;
//        powerupjs.Game.gameWorld.time += 1;
    }

    if (Math.round(this.position.x) > Math.round(this.newPositionX)) {
        this.position.x += this.velocity.x * delta;
        this.updating = true;
        this.velocity.x += 5;
    }

    if (Math.round(this.position.x) < Math.round(this.newPositionX)) {
        this.position.x -= this.velocity.x * delta;
        this.updating = true;
        this.velocity.x += 5;
    }

    if (Math.round(this.position.x) === Math.round(this.newPositionX)) {
        this.velocity = new powerupjs.Vector2(0,0);
        this.updating = false;
    }
    
    enemies = powerupjs.GameStateManager._currentGameState.obstaclesArray;

    for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].position.y > 300){
            if(this.collisionBox.intersects(enemies[i].collisionBox)){
                //Stops the game
                console.log("Collision!")
                this.die();
                setTimeout(function(){
                        var aux = powerupjs.GameStateManager.get(ID.game_state_playing);
                        powerupjs.GameStateManager.switchTo(ID.game_state_gameOver);
                }, 800); //waiting for the exposion
            }
        }
    }
};

Player.prototype.die = function () {
//    if (!this.alive)
//        return;
    sounds.crash.play();
    this.alive = false;
    sounds.engine.volume = 0;
//    this.playAnimation("die");
};

Player.prototype.draw = function () {
    if (this.alive === true) {
        powerupjs.Canvas2D.drawImage(this.sprite._image, this.position, this.origin, this.rotation);
    } else if (this.alive === false) {
        powerupjs.Canvas2D.drawImage(this.crash._image, this.position, this.origin, this.rotation);
    }
};