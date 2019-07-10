import Actors from '../../interfaces/Actores';
import Game from '../../interfaces/Games';
import Sprites from '../../interfaces/Sprites';
import Directions from '../../interfaces/Directions';
import subsctiptions from '../../interfaces/Subscriptions';

const randomStr = require('crypto-random-string');

export default class Actor implements Actors {
  id: string;
  xpos: number;
  ypos: number;
  size: number
  speed: number;
  sprites: Array<Sprites>;
  subsctiptions: Array<subsctiptions>
  health: number;

  constructor(
    xpos: number, ypos: number, speed: number, sprites: Array<Sprites>
  ) {
    this.id = randomStr({ length: 20 });
    this.xpos = xpos;
    this.ypos = ypos;
    this.size = 32;
    this.sprites = sprites;
    this.speed = speed;
    this.subsctiptions = [subsctiptions.clock, subsctiptions.draw]
    this.health = 100;
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
    return this.sprites[0];
  }

  getOccupation() {
    return [this.xpos, this.ypos, this.size]
  }

  keyboardHandler(evnt: string, type: string):void {
    console.error('keyboardHandler need to be defined.');
  }

  getsHit(damage: number) {
    this.health = this.health - damage
    console.log('health is: ', this.health);
  }


}