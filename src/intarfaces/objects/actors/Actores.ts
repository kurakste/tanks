import Sprite from './Sprites';
import Game from '../../Games';
import Directions from './Directions'

export default interface Actores {
  xpos: number;
  ypos: number;
  xsize: number;
  ysize: number;
  speed: number;
  sprites: Array<Sprite>;
  move(direction: Directions, game: Game): void;
  clock(): void;
  draw(game: Game):void;
  keyboardHandler():void;
}