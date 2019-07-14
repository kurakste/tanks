import spriteseetsImageInterface from './spritesheetObject';
import Actores from './Actores';
import Hitter from './Hitter';

interface Games {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  name: string;
  fps: number;
  work: boolean;
  height: number;
  width: number;
  curentEnemyEmount: number;
  maxEnemyEmount: number;

  _now: number;
  _lt: number;
  _subscribers: any;


  clock(): void;
  loadSpritesSheets(arr: Array<spriteseetsImageInterface>):void;
  loadGameMap(arrOfActors: Array<any>): void;
  addFigure(figure: Actores):void;
  removeFigure(figure: Actores):void;
  drawField():void;
  init():void;
  isFieldFree(x:number, y:number, size: number, id:string): boolean;
  checkForHits(attacker: Actores & Hitter): boolean;
}

export default Games;