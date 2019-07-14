import imgLoader from '../helpers/imgLoader';
import Games from '../interfaces/Games';
import Actores from '../interfaces/Actores';
import Hittable from '../interfaces/Hittable';
import Hitter from '../interfaces/Hitter';
import subscriptions from '../interfaces/enum/Subscriptions';
import boxCollides from '../helpers/boxCollides';
import KeyboardListener from '../interfaces/keyboardListener';
import { getBrick, getGreenBrick, getBlueBrick } from './BarrierFab';
import Veg from './Vegetations';


class Tanks implements Games {
  spriteSheets: Array<any>;
  ctx: CanvasRenderingContext2D;
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
    this.spriteSheets = []
    this.name = name;
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

  loadGameMap(map: Array<string>) {
    let rowi = 0;
    let coli = 0;
    //let act = null;

    const mapMatrix: { [key: string]: any } = {
      'o': () => '',
      'b': () => { const act = getBlueBrick(coli * 32, rowi * 32, this); this.addFigure(act) },
      'g': () => { const act = getGreenBrick(coli * 32, rowi * 32, this); this.addFigure(act) },
      'h': () => { const act = getBrick(coli * 32, rowi * 32, this); this.addFigure(act) },
      'v': () => { const act = new Veg(coli*32, rowi*32, this); this.addFigure(act) },
    }

    map.map((row, ri) => {
      const cols = row.split('');
      rowi = ri;
      cols.map((cel, ci) => {
        coli = ci;
        mapMatrix[cel]();

      });
    })
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
      if (ent.transparency) return;
      const [x1, y1, size1] = ent.getOccupation();
      const pos1 = [x1, y1];
      const tmp = !boxCollides(pos, size, pos1, size1);
      res = res && tmp;
    });
    return res;
  }

  checkForHits(attacker: Actores & Hitter): boolean {
    let hit = false;
    const targets = this
      ._subscribers[subscriptions.hits]
      .filter((el: Hittable & Actores) => el.id !== attacker.id);
    targets.map((tg: Hittable & Actores) => {
      const pos1 = [tg.xpos, tg.ypos];
      const size1 = tg.size;
      const _hit = boxCollides(pos1, size1, [attacker.xpos, attacker.ypos], attacker.size);
      _hit && tg.getsHit(attacker.damage);
      hit = hit || _hit;
    });
    return hit;
  }

  keyboardHandler(event: KeyboardEvent): void {
    this.keyboardEvent(event.code, event.type);
  };

  keyboardEvent(keyEvent: string, evType: string) {
    this._subscribers[subscriptions.keyboard] && this._subscribers[subscriptions.keyboard].map((act: Actores & KeyboardListener) => {
      act.keyboardHandler(keyEvent, evType);
    });
  }

  getsHit(damage: number) {
    this.health = this.health - damage
  }

  init() {
    console.log('I start well!', this);
  }

}



export default Tanks;