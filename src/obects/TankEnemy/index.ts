import Tank from '../Tank/index';
import Games from '../../interfaces/Games';
import dir from '../../interfaces/enum/Directions';

export default class ETank extends Tank {
  changeDirectionRandom: number;
  randomFier: number;

  constructor(xpos: number, ypos: number, game:Games) {
    super(xpos, ypos, game);
    this.changeDirectionRandom = Math.floor(Math.random()*400);
    this.randomFier = Math.floor(Math.random()*200);

  }

  keyboardHandler() {
    return;
  }
  
  clock() {
    this.logic();
    super.clock()
  }

  getsHit(demage:number) {
    super.getsHit(demage);
    if (this.health<0) {
      this.game.curentEnemyEmount--
    }
  }

  _changeDirection() {

  }

  _randFier() {
    if (!this.randomFier) {
      this.fier();
      this.randomFier =Math.floor(Math.random()*200); 
    } else {
      --this.randomFier
    }
  }

  _simplyMove() {
    let newxpos = this.xpos;
    let newypos = this.ypos;

    const moveMatrix: { [key in dir]: any } = {
      [dir.Left]: () => { newxpos = this.xpos - this.speed },
      [dir.Right]: () => { newxpos = this.xpos + this.speed },
      [dir.Up]: () => { newypos = this.ypos - this.speed },
      [dir.Down]: () => { newypos = this.ypos + this.speed },
    };

    moveMatrix[this.direction]();
    const isFree = this._isStepFree(newxpos, newypos);
    isFree && this.move();
    (!isFree) && ++this.direction;
    this.direction = (this.direction>3) ? 0 : this.direction; 

  }

  logic() {
    this._simplyMove();
    this._randFier()
    
  }
}