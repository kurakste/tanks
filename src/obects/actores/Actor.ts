import Actors from '../../interfaces/Actores';
import Game from '../../interfaces/Games';
import Sprites from '../../interfaces/Sprites';
import Directions from '../../interfaces/enum/Directions';
import subsctiptions from '../../interfaces/enum/Subscriptions';

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
  transparency: boolean;

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
    this.transparency = false;
  }

  move(direction: Directions, game: Game) {

  }

  clock() {
    const sprite = this._getSprite();
    sprite.clock();
  }


  draw(game: Game) {
    const sprite = this._getSprite()
    sprite.draw(this.xpos, this.ypos, game);
  }
  _getSprite(): Sprites {
    return this.sprites[0];
  }

  getOccupation() {
    return [this.xpos, this.ypos, this.size]
  }

}