import spriteseetsImageInterface from './objects/spritesheetObject';
import KeyboardStates from './KeyboardStates';
import Actores from './objects/actors/Actores';

interface Game {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  name: string;
  fps: number;
  work: boolean;
  height: number;
  width: number;

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
}

export default Game;