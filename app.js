"use strict";
var ID = {};
var sprites = {};
var sounds = {};

// Loading the assets ==============================================================================

powerupjs.Game.loadAssets = function () {
    var loadSprite = function (sprite, collisionMask) {
        return new powerupjs.SpriteSheet("assets/" + sprite/*, collisionMask*/);
    };
    sprites.player = loadSprite("player.png");
    sprites.crash = loadSprite("crash.png");
    sprites.tile = loadSprite("tile.png");
    sprites.obstacle = loadSprite("obstacle.png")
    sprites.bg1 = loadSprite("background_tile1.png");
    sprites.bg2 = loadSprite("background_tile2.png");
    sprites.bg3 = loadSprite("background_tile3.png");
    sprites.bg4 = loadSprite("background_tile4.png");
    sprites.bg5 = loadSprite("background_tile5.png");
    sprites.bg6 = loadSprite("background_tile6.png");
    sprites.background_title = loadSprite("begining.png");
    sprites.gameOver = loadSprite("end.png");
    sprites.cloud1 = loadSprite("cloud_1.png");
    sprites.cloud2 = loadSprite("cloud_2.png");
    sprites.cloud3 = loadSprite("cloud_3.png");
    sprites.cloud4 = loadSprite("cloud_4.png");
    sprites.score = loadSprite("score_board.png");

    var loadSound = function (sound, looping) {
        return new powerupjs.Sound("assets/" + sound, looping);
    };
    sounds.mainTheme = loadSound("music", true);
    sounds.engine = loadSound("engine", true);
    sounds.crash = loadSound("crash", false);

    console.log ("Assets loaded")
};

// Initialization ==================================================================================

powerupjs.Game.initialize = function () {
    
    // Que the music
    sounds.mainTheme.play();
    sounds.engine.volume = 0.1;

    // create the different game states

    ID.game_state_title = powerupjs.GameStateManager.add(new TitleState());
    ID.game_state_playing = powerupjs.GameStateManager.add(new PlayingState());
    ID.game_state_gameOver = powerupjs.GameStateManager.add(new GameOverState());

    // set the current game state

    powerupjs.GameStateManager.switchTo(ID.game_state_title);
    console.log("Game initialized");
};
