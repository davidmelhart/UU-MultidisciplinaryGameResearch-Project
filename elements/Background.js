function Background(id){
    powerupjs.GameObject.call(this);
    this.origin = new powerupjs.Vector2(0, 0);
    this.sprite = this.setRandomSprite();
    this.velocity = new powerupjs.Vector2(0, -80);
    this.height = 192;
    this.position.y = id * this.height - 2;
}
 
Background.prototype = Object.create(powerupjs.GameObject.prototype);

Background.prototype.setRandomSprite = function () {
        var randomNum = function() {return Math.floor( Math.random() * 6);}
         
        if (randomNum() === 0) {
            return sprites.bg1;
        } else if (randomNum() === 1) {
            return sprites.bg2;
        } else if (randomNum() === 2) {
            return sprites.bg3;
        } else if (randomNum() === 3) {
            return sprites.bg4;
        } else if (randomNum() === 4) {
            return sprites.bg5;
        } else {
            return sprites.bg6;
        }
};
 
Background.prototype.update = function (delta) {
    this.position.y -= this.velocity.y * delta;
   
    if (this.position.y < 768) {
        this.visible = true;
    } else {
        this.visible = false;
    }
 
    if (this.visible === false) {
        this.reset();
    }
};

Background.prototype.draw = function () {
    if (this.visible)
        powerupjs.Canvas2D.drawImage(this.sprite._image, this.position, this.origin, this.rotation);
};
 
Background.prototype.reset = function () {
    this.sprite = this.setRandomSprite();
    this.position.y = -192;
};