import Sprite from './Sprites';
import Games from './Games';
import Directions from './enum/Directions';
import Subscriptions from './enum/Subscriptions';


export default interface Actores {
  id: string;
  xpos: number;
  ypos: number;
  size: number;
  speed: number;
  sprites: Array<Sprite>;
  subsctiptions: Array<Subscriptions>;
  move(direction: Directions, game: Games): void;
  clock(): void;
  draw(game: Games): void;
  keyboardHandler(event: string, type: string): void;
  getOccupation(): Array<number>;
}