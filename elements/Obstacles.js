function Obstacle(){
    powerupjs.SpriteGameObject.call(this);
    this.sprite = sprites.obstacle;
    this.timePassed = 0;
    this.setRandomPosition();
    this.velocity = new powerupjs.Vector2(0, 3.4);
    this.timeVelocity = 0;
    this.collisionBox = new powerupjs.Rectangle(0, 0, 32, 40);
    
}

Obstacle.prototype = Object.create(powerupjs.SpriteGameObject.prototype);

Obstacle.prototype.update = function (delta) {
    if (this.visible) {

        this.collisionBox.x = this.position.x + 16;
        this.collisionBox.y = this.position.y + 24;

        this.timePassed += delta;
        this.timeVelocity += delta;

        if(this.timeVelocity > 5){
            this.velocity.y += 0.4;
            this.timeVelocity = 0;
        }

        this.position.y += this.velocity.y;

        if(this.position.y > 630){
            this.visible = false;
            this.timePassed = 0;
            this.setRandomPosition();
            this.visible = true;
        }
    }
};

Obstacle.prototype.setRandomPosition = function () {
    if(this.visible == false){
        this.visible = true;
    }

    //Four randoms positions

    var rand = Math.random() * 100;
    if(0 <= rand && rand < 20){
        this.position.x = 30;
    }else if(20 <= rand && rand < 40){
        this.position.x = 94;
    }else if(40 <= rand && rand < 60){
        this.position.x = 158;
    }else if(60 <= rand && rand < 80){
        this.position.x = 222;
    }else if(80 <= rand && rand <= 100){
        this.position.x = 286;
    }
    this.position.y = -10 - Math.random()*300;
};

Obstacle.prototype.draw = function () {
    if (this.visible)
        powerupjs.Canvas2D.drawImage(this.sprite._image, this.position, this.origin, this.rotation);
};
