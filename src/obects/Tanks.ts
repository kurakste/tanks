import imgLoader from '../helpers/imgLoader';
import Games from '../interfaces/Games';
import Actores from '../interfaces/objects/actors/Actores';
import subscriptions from '../interfaces/Subscriptions';
import boxCollides from '../helpers/boxCollides';

class Tanks implements Games {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
  //keyboardState: KeyboardStates;
  //keyPressed: string | boolean;
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
  health: number;


  constructor(name: string, speed: number, wd: number, hg: number, bgcol: string, ctx: CanvasRenderingContext2D) {
    // [{name, <img>}, ...] 
    this.spriteSheets = []
    this.name = name;
    //this.keyboardState = new KeyboardState();
    this.fps = 1 / speed;
    this.backgroud = bgcol;
    this.width = wd;
    this.height = hg;
    this.work = true;
    this._now = Date.now();
    this._lt = Date.now();
    this.clock = this.clock.bind(this);
    this.keyboardHandler = this.keyboardHandler.bind(this);
    this._subscribers = {};
    this._subscribers[subscriptions.clock] = [];
    this._subscribers[subscriptions.draw] = [];
    this._subscribers[subscriptions.keyboard] = [];
    this._subscribers[subscriptions.hits] = [];
    this.ctx = ctx;
    this.health = 200;
  }

  clock() {
    this._now = Date.now();
    let dt = (this._now - this._lt);
    if (dt <= this.fps * 1000) return;
    this._lt = Date.now();
    //    console.log('tic', dt);
    this._subscribers[subscriptions.clock].map((act: Actores) => {
      act.clock();
    });
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
      this._subscribers[sub].push(figure);
    });
  }

  removeFigure(figure: Actores) {
    for (let key in this._subscribers) {
      let _arr = this._subscribers[key].filter((el: Actores) => el.id !== figure.id);
      this._subscribers[key] = _arr;
    }
  }

  clear(): void {
    this.ctx.fillStyle = this.backgroud; //backgroud;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawField(): void {
    this.clear();
    this._subscribers[subscriptions.draw].map((act: Actores) => {
      act.draw(this);
    });
  }

  isFieldFree(x: number, y: number, size: number, id: string): boolean {
    let res = true
    const pos = [x, y];
    const figures = this._subscribers[subscriptions.draw]
      .filter((el: Actores) => el.id != id);
    figures.map((ent: Actores) => {
      if (!ent.getOccupation) return;
      const [x1, y1, size1] = ent.getOccupation();
      const pos1 = [x1, y1];
      const tmp = !boxCollides(pos, size, pos1, size1);
      res = res && tmp;
    });
    return res;
  }

  checkForHits(x: number, y: number, size: number, damage: number, attackerId: string): boolean {
    const targets = this._subscribers[subscriptions.hits].filter((el: Actores) => el.id !== attackerId);
    targets.map((tg: Actores) => {
      const pos1 = [tg.xpos, tg.ypos];
      const size1 = tg.size;
      const hit = boxCollides(pos1, size1, [x, y], size);
      hit && tg.getsHit(damage);
    });
    return false;
  }

  keyboardHandler(event: KeyboardEvent): void {
    // if (event.type === 'keyup') {
    //   this.keyPressed = false;
    // } else {
    //   this.keyPressed = event.code;
    //   let a = this.keyPressed;
    //   console.log('after presed: ',  a, this);
    this.keyboardEvent(event.code, event.type);
    // }
    // switch (event.code) {
    //   case 'KeyH': this.keyboardEvent('left'); break;
    //   case 'KeyL': this.keyboardEvent('right'); break;
    //   case 'KeyJ': this.keyboardEvent('up'); break;
    //   case 'KeyK': this.keyboardEvent('down'); break;
    //   case 'KeyA': this.keyboardEvent('fier'); break;
    // }

  };

  keyboardEvent(keyEvent: string, evType: string) {
    this._subscribers[subscriptions.keyboard] && this._subscribers[subscriptions.keyboard].map((act: Actores) => {
      act.keyboardHandler(keyEvent, evType);
    });
  }

  getsHit(damage: number) {
    this.health = this.health - damage
    console.log('health is: ', this.health);
  }

  init() {
    console.log('I start well!', this);
  }

}



export default Tanks;