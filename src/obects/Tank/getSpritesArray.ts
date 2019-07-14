import Sprite from "../actores/Sprites";
import {
  tankGoDown, tankGoLeft, tankGoRight, tankGoUp,
  tankDown, tankLeft, tankRight, tankUp
} from './pictureMap'

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

export default [
  tankGoDowndSpr, tankGoUpSpr, tankGoLeftSpr, tankGoRightSpr,
  tankDownSpr, tankUpSpr, tankLeftSpr, tankRightSpr
]