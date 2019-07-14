import Tank from '../Tank/index';
import Games from '../../interfaces/Games';

export default class ETank extends Tank {
  constructor(xpos: number, ypos: number, game:Games) {
    super(xpos, ypos, game);
  }

  keyboardHandler() {
    return;
  }
  
  clock() {
    this.logic();
    super.clock()
  }

  logic() {
    
  }
}