import spriteseetsImageInterface from './objects/spritesheetObject';
import KeyboardStates from './KeyboardStates';

interface Game {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  name: string;
  fps: number;
  work: boolean;
  keyboardState: KeyboardStates;

  _now: number;
  _lt: number;
  clock(): void;
  loadSpritesSheets(arr: Array<spriteseetsImageInterface>):void;
  loadGameMap(arrOfActors: Array<any>): void;
  init():void;
}

export default Game;