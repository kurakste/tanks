import Actor from "../actores/Actor";
import Sprites from '../../interfaces/objects/actors/Sprites';
import Sprite from "../actores/Sprites";
import Dir from '../../interfaces/objects/actors/Directions';

import { ballLeft, ballRight, ballUp, ballDown } from './pictureMap';
import Game from "../../interfaces/Games";


export default class Fier extends Actor {

  activeSprite: Sprites;
  game: Game;
  tick: number;
  direction: Dir;
  damage: number;

  constructor(xpos: number, ypos: number, game: Game, dir: Dir) {

    const ballLeftSpr = new Sprite(
      "fullSpriteSheet", ballLeft, [0]
    );

    const ballRightSpr = new Sprite(
      "fullSpriteSheet", ballRight, [0]
    );

    const ballUpSpr = new Sprite(
      "fullSpriteSheet", ballUp, [0]
    );

    const ballDownSpr = new Sprite(
      "fullSpriteSheet", ballDown, [0]
    );


    super(xpos, ypos, 3, [ballLeftSpr, ballRightSpr, ballDownSpr, ballUpSpr]);

    this.activeSprite = ballLeftSpr;
    this.game = game;
    this.tick = 0;
    this.direction = dir;
    this.damage = 30;
  }

  getSprite(): Sprites {
    const spritetMatrix: { [key in Dir]: any } = {
      [Dir.Up]: this.sprites[3],
      [Dir.Down]: this.sprites[2],
      [Dir.Left]: this.sprites[0],
      [Dir.Right]: this.sprites[0],
    }

    return spritetMatrix[this.direction]
  }

  checkForHit(newx: number, newy: number) {
    // we need to know is there an object.
    // if object happend is it damageable or not.
    // if damagleable how many damage it gets.
    const impact = this.game.checkForHits(newx, newy, this.size, this.damage, this.id);

    impact && this.game.removeFigure(this); 

  }

  clock() {
    const delta = 5;
    const shiftMatrix: { [key in Dir]: any } = {
      [Dir.Up]: [0, - delta],
      [Dir.Down]: [0, delta],
      [Dir.Left]: [- delta, 0],
      [Dir.Right]: [delta, 0],
    }

    let [dx, dy] = shiftMatrix[this.direction];
    const x = this.xpos + dx;
    const y = this.ypos + dy;
    this.checkForHit(x,y);
    if (this.xpos <= 0 || this.ypos <= 0 || this.xpos >= this.game.height ||
      this.ypos >= this.game.width) {
      this.game.removeFigure(this);
    }
    this.xpos = x;
    this.ypos = y;
  }

}