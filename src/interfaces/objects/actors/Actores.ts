import Sprite from './Sprites';
import Game from '../../Games';
import Directions from './Directions';
import Subscriptions from '../../Subscriptions';


export default interface Actores {
  id: string;
  xpos: number;
  ypos: number;
  // xsize: number;
  // ysize: number;
  size: number;
  speed: number;
  sprites: Array<Sprite>;
  subsctiptions: Array<Subscriptions>;
  move(direction: Directions, game: Game): void;
  clock(): void;
  draw(game: Game): void;
  keyboardHandler(event: string, type: string): void;
  getOccupation(): Array<number>;

}