import Sprite from './Sprites';
import Game from './Games';
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
  move(direction: Directions, game: Game): void;
  clock(): void;
  draw(game: Game): void;
  keyboardHandler(event: string, type: string): void;
  getOccupation(): Array<number>;
  getsHit(damage: number): void;

}