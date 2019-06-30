import imgLoader from '../helpers/imgLoader';
import Games from '../interfaces/Games';
import KeyboardStates from '../interfaces/KeyboardStates';
import KeyboardState from './KeyBoardState';
import Actores from '../interfaces/objects/actors/Actores';
import subscriptions from '../interfaces/Subscriptions';

class Tanks implements Games {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  keyboardState: KeyboardStates;
  name: string;
  width: number;
  height: number;
  backgroud: string;
  fps: number;
  work: boolean;
  _subscribers: any;
  _actors: Array<any>;
  _now: number;
  _lt: number;
  
  constructor(name: string, speed: number, wd: number, hg: number, bgcol: string, ctx: CanvasRenderingContext2D) {
    // [{name, <img>}, ...] 
    this.spriteSheets = []
    this.name = name;
    this.keyboardState = new KeyboardState();
    this.fps = 1 / speed;
    this.backgroud = bgcol;
    this.width = wd;
    this.height = hg;
    this.work = true;
    this._now = Date.now();
    this._lt = Date.now();
    this.clock = this.clock.bind(this);
    this._subscribers = {};
    this._subscribers[subscriptions.clock] = [];
    this._subscribers[subscriptions.draw] = [];
    this.ctx = ctx;
  }

  clock() {
    this._now = Date.now();
    let dt = (this._now - this._lt);
    if (dt <= this.fps * 1000) return;
    this._lt = Date.now();
    //    console.log('tic', dt);
    this.drawField();
  }
  
  async loadSpritesSheets(arrOfSpritesheets: Array<any>) {
    const promBound = arrOfSpritesheets.map((img: any) => imgLoader(img.src));
    const data: Array<any> = await Promise.all(promBound);
    const out = arrOfSpritesheets.map((el: any, i: number) => {
      return { name: el.name, img: data[i] }
    });
    this.spriteSheets = out;
  }
  
  loadGameMap(arrOfActors: Array<Actores>) {
    
  }
  
  addFigure(figure: Actores) {
    figure.subsctiptions.map(sub => {
      console.log('Ask this ', sub)
      this._subscribers[sub].push(figure);
    });
  }
  
  removeFigure(figure: Actores) {
    for (let key in this._subscribers) {
      let _arr = this._subscribers[key].filter((el:Actores) => el.id !== figure.id);
      this._subscribers[key] = _arr;
    } 
    console.log('i remove: ', this);
    
  }

  clear():void {
    this.ctx.fillStyle = this.backgroud; //backgroud;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
  
  drawField(): void {
    this.clear();
  }

  init() {
    console.log('I start well!', this);
  }

}



export default Tanks;