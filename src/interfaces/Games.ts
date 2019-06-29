import spriteseetsImageInterface from './objects/spritesheetObject';
import KeyboardStates from './KeyboardStates';
import Actores from './objects/actors/Actores';

interface Game {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  name: string;
  fps: number;
  work: boolean;
  keyboardState: KeyboardStates;

  _now: number;
  _lt: number;
  _subscribers: Object;

  clock(): void;
  loadSpritesSheets(arr: Array<spriteseetsImageInterface>):void;
  loadGameMap(arrOfActors: Array<any>): void;
  init():void;
}

export default Game;