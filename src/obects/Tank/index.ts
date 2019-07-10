import Actor from "../actores/Actor";
import Sprite from "../actores/Sprites";
import Sprites from '../../interfaces/Sprites';
import {
  tankGoDown, tankGoLeft, tankGoRight, tankGoUp,
  tankDown, tankLeft, tankRight, tankUp
} from './pictureMap';
import dir from '../../interfaces/enum/Directions';
import sub from '../../interfaces/enum/Subscriptions';
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
    const ball = new Ball(x, y, this.game, this.direction);
    this.game.addFigure(ball);
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
    const isFree = this.game.isFieldFree(newxpos, newypos, this.size, this.id);
    const inGameField = () => {
      let res = true;
      if (newxpos < 0 || newxpos > this.game.width - this.size) res = false;
      if (newypos < 0 || newypos > this.game.height - this.size) res = false;
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
}
