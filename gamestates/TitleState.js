/* The TitleState class represents the title screen 'game world'. It only shows a
   background image. When you click, it instructs the game state manager to switch 
   to the playing state.
 */
function TitleState() {
}

TitleState.prototype.handleInput = function () {
    if (powerupjs.Mouse.left.pressed) {
        powerupjs.GameStateManager.switchTo(ID.game_state_playing);
    }
};

TitleState.prototype.update = function (delta) {
};

TitleState.prototype.draw = function () {
    powerupjs.Canvas2D.drawImage(sprites.background_title._image);
};