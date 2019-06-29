import imgLoader from '../helpers/imgLoader';
import Games from '../intarfaces/Games';
import KeyboardStates from '../intarfaces/KeyboardStates';
import KeyboardState from './KeyBoardState';

class Tanks implements Games {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  keyboardState: KeyboardStates;
  name: string;
  fps: number;
  work: boolean;
  _now: number;
  _lt: number;

  constructor(name: string, speed: number) {
    // [{name, <img>}, ...] 
    this.spriteSheets = []
    this.name = name;
    this.keyboardState = new KeyboardState();
    this.fps = 1 / speed;
    this.work = true;
    this._now = Date.now();
    this._lt = Date.now();
    this.clock = this.clock.bind(this);
  }

  clock() {
    this._now = Date.now();
    let dt = (this._now - this._lt);
    if (dt <= this.fps * 1000) return;
    this._lt = Date.now();
    //    console.log('tic', dt);
  }

  async loadSpritesSheets(arrOfSpritesheets: Array<any>) {
    const promBound = arrOfSpritesheets.map((img:any) => imgLoader(img.src));
    const data:Array<any> = await Promise.all(promBound);
    const out = arrOfSpritesheets.map((el:any, i:number) => {
      return { name: el.name, img: data[i] }
    });
    this.spriteSheets = out;
  }

  loadGameMap(arrOfActors: Array<any>) {

  }

  init() {
    console.log('I start well!', this);
  }

}



export default Tanks;