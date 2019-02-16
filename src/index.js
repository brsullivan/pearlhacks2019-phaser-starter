import style from './app.css';

import Phaser from 'phaser';

// IMPORT Images + Sprites
import blockFile from './assets/images/block.png';
import alienSpritesheetFile from './assets/images/character_spritesheet.png';

// Import AUDIOSPRITE 
import musicSfxJsonFile from './assets/audio/music-sfx.json';
import musicSfxMp3File from './assets/audio/music-sfx.mp3';

// SETUP PHASER config 
const config = {
  type: Phaser.AUTO, 
  height: 600,
  width: 800,
  parent: 'game-container',
  scene: {
    preload: preload,
    create: create, 
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('block', blockFile);

  this.load.spritesheet('alien',
    alienSpritesheetFile, 
    { frameWidth: 72, frameHeight: 97 }
  );

  this.load.audioSprite('musicSfx', musicSfxJsonFile, musicSfxMp3File);
}

function create() {
  this.add.image(200, 200, 'block');
  this.add.sprite(400, 300, 'alien');

  this.sound.playAudioSprite('musicSfx', 'background-1');
}

function update() {

}