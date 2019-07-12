import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';
import Veg from './obects/Vegetations';
import { getBrick, getGreenBrick, getBlueBrick } from './obects/BarrierFab';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx = canva.getContext('2d');

(async function () {

  
  const tanks = new Tanks('Tanks', 25 , 600, 600, 'black', ctx);

  await tanks.loadSpritesSheets(sprSheetsArray);
  const tank = new Tank(20, 30, tanks);
  const veg1 = new Veg(100, 100, tanks);
  const brick1 = getBrick(400,400, tanks);
  const gBrick = getGreenBrick(500,500, tanks);
  const gBrick1 = getGreenBrick(500,500 - 32*1, tanks);
  const gBrick2 = getGreenBrick(500,500 - 32*2, tanks);
  const bBrick = getBlueBrick(50,200, tanks);
  const bBrick1 = getBlueBrick(50 + 32,200, tanks);
  const bBrick2 = getBlueBrick(50 +64 ,200, tanks);
  const figures = [tank, veg1, brick1, gBrick,  gBrick1, gBrick2, bBrick, 
    bBrick1, bBrick2 ];

  figures.map( fig => tanks.addFigure(fig));
  
  tanks.init();
  setInterval(tanks.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  console.log('tank created: ', tanks);

})();