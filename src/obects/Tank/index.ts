import Actor from "../actores/Actor";
import Sprites from '../../interfaces/Sprites';
;
import dir from '../../interfaces/enum/Directions';
import sub from '../../interfaces/enum/Subscriptions';
import Game from "../../interfaces/Games";
import Fire from '../Fier';
import Ball from '../Ball/Ball';
import spritesArray from './getSpritesArray';

export default class Tank extends Actor {
  direction: dir;
  dirToSprite: any;
  moving: boolean;
  game: Game;

  constructor(xpos: number, ypos: number, game: Game) {

    super(xpos, ypos, 3, spritesArray);
    this.moving = false;
    this.subsctiptions.push(sub.keyboard);
    this.subsctiptions.push(sub.hits);
    this.direction = dir.Up;
    this.dirToSprite = {};
    this.dirToSprite[dir.Up] = 1;
    this.dirToSprite[dir.Down] = 0;
    this.dirToSprite[dir.Left] = 2;
    this.dirToSprite[dir.Right] = 3;
    this.game = game;
  }

  keyboardHandler(event: string, type: string) {
    const keyMatrix: { [key: string]: any } = {};
    keyMatrix['KeyH'] = () => { this.direction = dir.Left; this.move() };
    keyMatrix['KeyL'] = () => { this.direction = dir.Right; this.move() };
    keyMatrix['KeyJ'] = () => { this.direction = dir.Down; this.move() };
    keyMatrix['KeyK'] = () => { this.direction = dir.Up; this.move() };
    keyMatrix['KeyA'] = () => { this.fier(); };

    if (type === 'keydown') {
      keyMatrix[event] && keyMatrix[event]();
    } else {
      this.stop();
    }
  }

  stop() {
    this.moving = false;
  }

  fier() {
    const delta = 35;
    const shiftMatrix: { [key in dir]: any } = {
      [dir.Up]: [0, - delta],
      [dir.Down]: [0, delta],
      [dir.Left]: [- delta, 0],
      [dir.Right]: [delta, 0],
    }

    let [dx, dy] = shiftMatrix[this.direction];
    const x = this.xpos + dx;
    const y = this.ypos + dy;
    const fire = new Fire(x, y, this.game);
    this.game.addFigure(fire);
    const ball = new Ball(x, y, this.game, this.direction);
    //console.log(`tank: ${this.xpos}, ${this.ypos}. Fier: ${x}, ${y}`)
    this.game.addFigure(ball);
  }

  _isStepFree(x: number, y: number): boolean {
    const isFree = this.game.isFieldFree(x, y, this.size - 5, this.id);

    const inGameField = () => {
      let res = true;
      if (x < 0 || x > this.game.width - this.size) res = false;
      if (y < 0 || y > this.game.height - this.size) res = false;
      return res;
    }
    //console.log('isFree: ', isFree, 'inField:', inGameField())
    return (isFree && inGameField());
  }

  move() {
    let newxpos = this.xpos;
    let newypos = this.ypos;

    const moveMatrix: { [key in dir]: any } = {
      [dir.Left]: () => { newxpos = this.xpos - this.speed },
      [dir.Right]: () => { newxpos = this.xpos + this.speed },
      [dir.Up]: () => { newypos = this.ypos - this.speed },
      [dir.Down]: () => { newypos = this.ypos + this.speed },
    };

    moveMatrix[this.direction]();

    if (this._isStepFree(newxpos, newypos)) {
      this.moving = true;
      this.xpos = newxpos;
      this.ypos = newypos;
    }

  }

  _getSprite(): Sprites {
    let spr;
    const moveMatrix: { [key in dir]: any } = {
      [dir.Left]: () => { spr = this.sprites[2] },
      [dir.Right]: () => { spr = this.sprites[3] },
      [dir.Up]: () => { spr = this.sprites[1] },
      [dir.Down]: () => { spr = this.sprites[0] },
    };

    const standMatrix: { [key in dir]: any } = {
      [dir.Left]: () => { spr = this.sprites[6] },
      [dir.Right]: () => { spr = this.sprites[7] },
      [dir.Up]: () => { spr = this.sprites[5] },
      [dir.Down]: () => { spr = this.sprites[4] },
    };

    this.moving && moveMatrix[this.direction]();
    (!this.moving) && standMatrix[this.direction]()
    return spr;
  }

  getsHit(damage: number) {
    this.health = this.health - damage
  }

  clock() {
    if (this.health <= 0) {
      this.game.removeFigure(this);
      const fire = new Fire(this.xpos, this.ypos, this.game);
      this.game.addFigure(fire);
    }
    super.clock();
  }
}
