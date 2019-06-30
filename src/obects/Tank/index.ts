import Actor from "../actores/Actor";
import Sprite from "../actores/Sprites";
import Sprites from '../../interfaces/objects/actors/Sprites';
import { tankDown, tankLeft, tankRight, tankUp } from './pictureMap';
import dir from '../../interfaces/objects/actors/Directions';
import sub from '../../interfaces/Subscriptions';

export default class Tank extends Actor {
  direction: dir;
  dirToSprite: any;
  activeSprite: Sprites;

  constructor(xpos: number, ypos: number) {
    const tankDowndSpr = new Sprite(
      "fullSpriteSheet", tankDown, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankUpSpr = new Sprite(
      "fullSpriteSheet", tankUp, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankLeftSpr = new Sprite(
      "fullSpriteSheet", tankLeft, [0, 1, 2, 3, 4, 5, 6]
    );
    const tankRightSpr = new Sprite(
      "fullSpriteSheet", tankRight, [0, 1, 2, 3, 4, 5, 6]
    );

    super(xpos, ypos, 1, [tankDowndSpr, tankUpSpr, tankLeftSpr, tankRightSpr]);
    this.subsctiptions.push(sub.keyboard);
    this.direction = dir.Up;
    this.dirToSprite = {};
    this.dirToSprite[dir.Up] = 1;
    this.dirToSprite[dir.Down] = 0;
    this.dirToSprite[dir.Left] = 2;
    this.dirToSprite[dir.Right] = 3;
    this.activeSprite = tankUpSpr;
  }
  keyboardHandler(event: string) {
    console.log('Tank get keboard event:', event);
    if (event === 'left') this.direction = dir.Left; // this.sprites[2] ;
    if (event === 'right') this.direction = dir.Right;// this.sprites[3];
    if (event === 'up') this.direction = dir.Up; // this.sprites[1];
    if (event === 'down') this.direction = dir.Down;// this.sprites[0];
    this.move();
  }
  move() {
    switch (this.direction) {
      case dir.Left: this.xpos = this.xpos - 2; break;
      case dir.Right: this.xpos = this.xpos + 2; break;
      case dir.Up: this.ypos = this.ypos - 2; break;
      case dir.Down: this.ypos = this.ypos + 2; break;
    }
  }
  getSprite(): Sprites {
    let spr;
    switch (this.direction) {
      case dir.Left: spr = this.sprites[2]; break;
      case dir.Right: spr = this.sprites[3]; break;
      case dir.Up: spr = this.sprites[1]; break;
      case dir.Down: spr = this.sprites[0]; break;
    }
    return spr;
  }
}
