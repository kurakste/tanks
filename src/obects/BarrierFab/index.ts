import Barrier from '../Barrier';
import { brickArr, gbrickArr, bbrickArr } from '../BarrierFab/bricksMap';
import Games from '../../interfaces/Games';
import Sprite from '../actores/Sprites';


const getBrick = (x: number, y: number, game: Games) => {
  const [brick,  brick70, brick40, brick10 ] = brickArr;
  const brickSpr = new Sprite("fullSpriteSheet", brick, [0]);
  const brickSpr70 = new Sprite("fullSpriteSheet", brick70, [0]);
  const brickSpr40 = new Sprite("fullSpriteSheet", brick40, [0]);
  const brickSpr10 = new Sprite("fullSpriteSheet", brick10, [0]);
  const sprites = [brickSpr, brickSpr70, brickSpr40, brickSpr10];


  const Brick = new Barrier(x, y, game, sprites)
  return Brick;
} 

const getGreenBrick = (x: number, y: number, game: Games) => {
  const [gbrick,  gbrick70, gbrick40, gbrick10,] = gbrickArr;
  const brickSpr = new Sprite("fullSpriteSheet", gbrick, [0]);
  const brickSpr70 = new Sprite("fullSpriteSheet", gbrick70, [0]);
  const brickSpr40 = new Sprite("fullSpriteSheet", gbrick40, [0]);
  const brickSpr10 = new Sprite("fullSpriteSheet", gbrick10, [0]);
  const sprites = [brickSpr, brickSpr70, brickSpr40, brickSpr10];


  const Brick = new Barrier(x, y, game, sprites)
  return Brick;
} 

const getBlueBrick = (x: number, y: number, game: Games) => {
  const [bbrick,  bbrick70, bbrick40, bbrick10,] = bbrickArr;
  const brickSpr = new Sprite("fullSpriteSheet", bbrick, [0]);
  const brickSpr70 = new Sprite("fullSpriteSheet", bbrick70, [0]);
  const brickSpr40 = new Sprite("fullSpriteSheet", bbrick40, [0]);
  const brickSpr10 = new Sprite("fullSpriteSheet", bbrick10, [0]);
  const sprites = [brickSpr, brickSpr70, brickSpr40, brickSpr10];


  const Brick = new Barrier(x, y, game, sprites)
  return Brick;
} 

export { getBrick, getGreenBrick, getBlueBrick }