import Actor from "../actores/Actor";
import Sprite from "../actores/Sprites";
import Sprites from '../../interfaces/objects/actors/Sprites';
import {tankDown, tankLeft, tankRight, tankUp} from './pictureMap';
import dir from '../../interfaces/objects/actors/Directions';

export default class Tank extends Actor {
  direction: dir;
  dirToSprite: any;
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
    
    super(xpos, ypos, 1, [tankDowndSpr, tankUpSpr, tankLeftSpr, tankRightSpr])
    this.direction = dir.Up;
    this.dirToSprite = {};
    this.dirToSprite[dir.Up] = 1;
    this.dirToSprite[dir.Down] = 0;
    this.dirToSprite[dir.Left] = 2;
    this.dirToSprite[dir.Right] = 3;
  }

  getSprite():Sprites {
    const spritePos = this.dirToSprite[this.direction];
    return this.sprites[spritePos];
  }
}
