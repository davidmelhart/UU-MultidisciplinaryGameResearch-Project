function Cloud(id){
    powerupjs.GameObject.call(this);
    this.origin = new powerupjs.Vector2(0, 0);
    this.sprite = this.setRandomSprite();
    this.velocity = new powerupjs.Vector2(0, -40 - ((Math.floor(Math.random() * 5) * 6)));
    this.position.y = /*-250 -*/ (Math.floor(Math.random() * 6) * 192);
    this.position.x = (Math.floor(Math.random() * 7) * 64) - 16;
}
 
Cloud.prototype = Object.create(powerupjs.GameObject.prototype);
 
Cloud.prototype.setRandomSprite = function () {
        var randomNum = function() {return Math.floor( Math.random() * 3);}
         
        if (randomNum() === 0) {
            return sprites.cloud1;
        } else if (randomNum() === 1) {
            return sprites.cloud2;
        } else if (randomNum() === 2) {
            return sprites.cloud3;
        } else {
            return sprites.cloud4;
        }
};
 
Cloud.prototype.update = function (delta) {
    this.position.y -= this.velocity.y * delta;
     
    if (this.position.y < 605) {
        this.visible = true;
    } else {
        this.visible = false;
    }
 
    if (this.visible === false) {
        this.reset();
    }
};

Cloud.prototype.draw = function () {
    if (this.visible)
        powerupjs.Canvas2D.drawImage(this.sprite._image, this.position, this.origin, this.rotation);
};
 
Cloud.prototype.reset = function () {
    this.sprite = this.setRandomSprite();
    this.position.x = (Math.floor(Math.random() * 7) * 64) - 16;
    this.position.y = -216;
    this.velocity = new powerupjs.Vector2(0, -40 - ((Math.floor(Math.random() * 5) * 6)));
};