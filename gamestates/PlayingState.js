"use strict";

function PlayingState() {

    //this.reset();
    this.player = new Player();
    this.obstaclesArray = [];
    this.timePlanes = 0;
    this.time = 0;
    this.score = 0; 
    this.bgArray = [];
    this.aux;

    this.cloudArray = [];

    for (var i = 0; i < 6; i++) {
        this.background = new Background(i);
        this.bgArray.push(this.background);
    }

    for (var i = 0; i < 6; i++) {
        this.cloud = new Cloud();
        this.cloudArray.push(this.cloud);
    }

    this.obstacle = new Obstacle();
    this.obstaclesArray.push(this.obstacle);
}

/* Let each object handle their own input. */
PlayingState.prototype.handleInput = function () {
    this.player.handleInput();
};

/* Let each object update itself. */
PlayingState.prototype.update = function (delta) {
    this.player.update(delta);
    
    this.timePlanes += delta;
    this.time += delta;

    if(this.time > 1){
        this.time = 0;
        this.score += 1;
    }

    if(this.timePlanes > 10){
        this.timePlanes = 0;
        this.aux = new Obstacle();
        this.obstaclesArray.push(this.aux);
    }

    for (var i = 0, len = this.obstaclesArray.length; i < len; i++) {
            this.obstaclesArray[i].update(delta);
    }

    for (var tile = 0, len = this.bgArray.length; tile < len; tile++) {
        this.bgArray[tile].update(delta);
    }
    
    for (var i = 0, len = this.cloudArray.length; i < len; i++) {
        this.cloudArray[i].update(delta);
    }

};

/* Drawing everything on the screen in the right order. */
PlayingState.prototype.draw = function () {
    powerupjs.Canvas2D.fillIn("grey");
    for (var tile = 0, len = this.bgArray.length; tile < len; tile++) {
        this.bgArray[tile].draw();
    }

    for (var i = 0, len = this.obstaclesArray.length; i < len; i++) {
            this.obstaclesArray[i].draw();
        }
    
    this.player.draw();
    
    for (var i = 0, len = this.cloudArray.length; i < len; i++) {
        this.cloudArray[i].draw();
    }

    powerupjs.Canvas2D.drawImage(sprites.score._image);
    powerupjs.Canvas2D.drawText("Time: " + this.score, new powerupjs.Vector2(10, 8), new powerupjs.Vector2(0, 0), powerupjs.Color.white);

};


PlayingState.prototype.reset = function () {

//Creates everything
    this.player = new Player();
    this.obstaclesArray = [];
    this.timePlanes = 0;
    this.time = 0;
    this.score = 0;
    this.bgArray = [];
    this.aux;

    this.cloudArray = [];

    for (var i = 0; i < 6; i++) {
        this.background = new Background(i);
        this.bgArray.push(this.background);
    }

    for (var i = 0; i < 6; i++) {
        this.cloud = new Cloud();
        this.cloudArray.push(this.cloud);
    }

    this.obstacle = new Obstacle();
    this.obstaclesArray.push(this.obstacle);
}