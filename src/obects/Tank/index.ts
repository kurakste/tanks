import Actor from "../actores/Actor";
import Sprite from "../actores/Sprites";
import Sprites from '../../interfaces/objects/actors/Sprites';
import {
  tankGoDown, tankGoLeft, tankGoRight, tankGoUp,
  tankDown, tankLeft, tankRight, tankUp
} from './pictureMap';
import dir from '../../interfaces/objects/actors/Directions';
import sub from '../../interfaces/Subscriptions';
import Game from "../../interfaces/Games";
import Fire from './Fire';

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
    this.game.addFigure(fire)
  }
  move() {
    this.moving = true;
    switch (this.direction) {
      case dir.Left: this.xpos = this.xpos - this.speed; break;
      case dir.Right: this.xpos = this.xpos + this.speed; break;
      case dir.Up: this.ypos = this.ypos - this.speed; break;
      case dir.Down: this.ypos = this.ypos + this.speed; break;
    }
  }

  getSprite(): Sprites {
    let spr;
    //console.log(this.moving);
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
