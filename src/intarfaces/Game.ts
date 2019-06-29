import spriteseetsImageInterface from './objects/spritesheetObject';

interface Game {
  spriteSheets: Array<any>;
  name: string;
  fps: number;
  work: boolean;
  _now: number;
  _lt: number;
  clock(): void;
  loadSpritesSheets(arr: Array<spriteseetsImageInterface>):void;
  loadGameMap(arrOfActors: Array<any>): void;
}

export default Game;