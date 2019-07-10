import Actor from "../actores/Actor";
import Sprite from "../actores/Sprites";
import Sprites from '../../interfaces/Sprites';
import {
  tankGoDown, tankGoLeft, tankGoRight, tankGoUp,
  tankDown, tankLeft, tankRight, tankUp
} from './pictureMap';
import dir from '../../interfaces/Directions';
import sub from '../../interfaces/Subscriptions';
import Game from "../../interfaces/Games";
import Fire from './Fire';
import Ball from './Ball';

export default class Tank extends Actor {
  direction: dir;
  dirToSprite: any;
  activeSprite: Sprites;
  moving: boolean;
  game: Game;

  constructor(xpos: number, ypos: number, game: Game) {
    const tankDownSpr = new Sprite(
      "fullSpriteSheet", tankDown, [0]
    );
    const tankUpSpr = new Sprite(
      "fullSpriteSheet", tankUp, [0]
    );
    const tankLeftSpr = new Sprite(
      "fullSpriteSheet", tankLeft, [0]
    );
    const tankRightSpr = new Sprite(
      "fullSpriteSheet", tankRight, [0]
    );
    const tankGoDowndSpr = new Sprite(
      "fullSpriteSheet", tankGoDown, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankGoUpSpr = new Sprite(
      "fullSpriteSheet", tankGoUp, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankGoLeftSpr = new Sprite(
      "fullSpriteSheet", tankGoLeft, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankGoRightSpr = new Sprite(
      "fullSpriteSheet", tankGoRight, [0, 1, 2, 3, 4, 5, 6]
    );

    super(xpos, ypos, 3, [
      tankGoDowndSpr, tankGoUpSpr, tankGoLeftSpr, tankGoRightSpr,
      tankDownSpr, tankUpSpr, tankLeftSpr, tankRightSpr
    ]);

    this.moving = false;
    this.subsctiptions.push(sub.keyboard);
    this.direction = dir.Up;
    this.dirToSprite = {};
    this.dirToSprite[dir.Up] = 1;
    this.dirToSprite[dir.Down] = 0;
    this.dirToSprite[dir.Left] = 2;
    this.dirToSprite[dir.Right] = 3;
    this.activeSprite = tankDownSpr;
    this.game = game;
  }

  keyboardHandler(event: string, type: string) {
    const keyMatrix: { [key: string]: any } = {};
    keyMatrix['KeyH'] = () => { this.direction = dir.Left; this.move() };
    keyMatrix['KeyL'] = () => { this.direction = dir.Right; this.move() };
    keyMatrix['KeyJ'] = () => { this.direction = dir.Up; this.move() };
    keyMatrix['KeyK'] = () => { this.direction = dir.Down; this.move() };
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
    const delta = 30;
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
    const ball = new Ball(x,y,this.game, this.direction);
    this.game.addFigure(ball);
  }
  move() {
    //TODO: refactor this switch
    let newxpos = this.xpos;
    let newypos = this.ypos;
    switch (this.direction) {
      case dir.Left: newxpos = this.xpos - this.speed; break;
      case dir.Right: newxpos = this.xpos + this.speed; break;
      case dir.Up: newypos = this.ypos - this.speed; break;
      case dir.Down: newypos = this.ypos + this.speed; break;
    }
    const isFree = this.game.isFieldFree(newxpos, newypos, this.size, this.id);
    const inGameField = () =>{
      let res =true;
      if (newxpos<0 || newxpos>this.game.width-this.size) res = false;
      if (newypos<0 || newypos>this.game.height-this.size) res = false;
      return res;
    }
    if (isFree && inGameField()) {
      this.moving = true;
      this.xpos = newxpos;
      this.ypos = newypos;
    }

  }

  getSprite(): Sprites {
    let spr;
    //TODO: refactor this switch

    if (this.moving) {
      switch (this.direction) {
        case dir.Left: spr = this.sprites[2]; break;
        case dir.Right: spr = this.sprites[3]; break;
        case dir.Up: spr = this.sprites[1]; break;
        case dir.Down: spr = this.sprites[0]; break;
      }
    } else {
      switch (this.direction) {
        case dir.Left: spr = this.sprites[6]; break;
        case dir.Right: spr = this.sprites[7]; break;
        case dir.Up: spr = this.sprites[5]; break;
        case dir.Down: spr = this.sprites[4]; break;
      }
    }
    return spr;
  }
}
