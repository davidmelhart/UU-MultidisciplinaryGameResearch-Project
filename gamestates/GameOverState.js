//GameOverState scene when you lose
function GameOverState() {
}

GameOverState.prototype.handleInput = function () {
    if (powerupjs.Mouse.left.pressed) {
        powerupjs.GameStateManager.switchTo(ID.game_state_title);
        var aux = powerupjs.GameStateManager.get(ID.game_state_playing);
        aux.reset();
    }

};

GameOverState.prototype.update = function (delta) {
};

GameOverState.prototype.draw = function () {
    powerupjs.Canvas2D.drawImage(sprites.gameOver._image);
};
