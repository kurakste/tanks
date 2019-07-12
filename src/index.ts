import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';
import Veg from './obects/Vegetations';
import { getBrick } from './obects/BarrierFab';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx = canva.getContext('2d');

(async function () {

  
  const tanks = new Tanks('Tanks', 25 , 600, 600, 'black', ctx);

  await tanks.loadSpritesSheets(sprSheetsArray);
  const tank = new Tank(20, 30, tanks);
  const veg1 = new Veg(100, 100, tanks);
  const brick1 = getBrick(400,400, tanks);

  tanks.addFigure(tank);
  tanks.addFigure(veg1);
  tanks.addFigure(brick1);
  tanks.init();
  setInterval(tanks.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  console.log('tank created: ', tanks);

})();