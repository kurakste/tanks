import Sprite from './Sprites';
import Game from '../../Game';
import Directions from './Directions'

export default interface Actores {
  xpos: number;
  ypos: number;
  xsize: number;
  ysize: number;
  speed: number;
  sprites: Array<Sprite>;
  draw(game: Game): void;
  move(direction: Directions, game: Game): void;
}