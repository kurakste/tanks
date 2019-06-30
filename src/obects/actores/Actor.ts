import Actors from '../../interfaces/objects/actors/Actores';
import Game from '../../interfaces/Games';
import Sprites from '../../interfaces/objects/actors/sprites';
import Directions from '../../interfaces/objects/actors/Directions';
import subsctiptions from '../../interfaces/Subscriptions';
//import randomStr from 'crypto-random-string';

const randomStr = require('crypto-random-string');

export default class Actor implements Actors {
  id: string;
  xpos: number;
  ypos: number;
  xsize: number;
  ysize: number;
  speed: number;
  sprites: Array<Sprites>;
  subsctiptions: Array<subsctiptions>

  constructor(
    xpos: number, ypos: number, speed: number, sprites: Array<Sprites>
  ) {
    this.id = randomStr({ length: 20 });
    this.xpos = xpos;
    this.ypos = ypos;
    this.sprites = sprites;
    this.speed = speed;
    this.subsctiptions = [subsctiptions.clock, subsctiptions.draw]
  }

  move(direction: Directions, game: Game) {

  }

  clock() {
    const sprite = this.getSprite();
    sprite.clock();
  }


  draw(game: Game) {
    const sprite = this.getSprite()
    sprite.draw(this.xpos, this.ypos, game);
  }
  getSprite(): Sprites {
    return this.sprites[3];
  }

  keyboardHandler(evnt: string):void {
    console.log('keyboardHandler need to be defined.');
  }

}