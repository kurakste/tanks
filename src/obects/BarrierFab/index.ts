import Barrier from '../Barrier';
import { brick, brick70, brick40, brick10 } from './brickMap';
import Games from '../../interfaces/Games';
import Sprite from '../actores/Sprites';


const getBrick = (x: number, y: number, game: Games) => {
  const brickSpr = new Sprite("fullSpriteSheet", brick, [0]);
  const brickSpr70 = new Sprite("fullSpriteSheet", brick70, [0]);
  const brickSpr40 = new Sprite("fullSpriteSheet", brick40, [0]);
  const brickSpr10 = new Sprite("fullSpriteSheet", brick10, [0]);
  const sprites = [brickSpr, brickSpr70, brickSpr40, brickSpr10];


  const Brick = new Barrier(x, y, game, sprites)
  return Brick;
} 

export { getBrick }