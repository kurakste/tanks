import spriteseetsImageInterface from './spritesheetObject';

interface AppInterface {
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

export default AppInterface;