import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';
import Veg from './obects/Vegetations';
import { getBrick, getGreenBrick, getBlueBrick } from './obects/BarrierFab';
import map from './maps/firstMap';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx = canva.getContext('2d');

(async function () {

  
  const tanks = new Tanks('Tanks', 25 , 608, 608, 'black', ctx);

  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.loadGameMap(map);
  const tank = new Tank(20, 30, tanks);
  const veg1 = new Veg(100, 100, tanks);
  const figures = [tank, veg1, ];

  figures.map( fig => tanks.addFigure(fig));
  
  tanks.init();
  setInterval(tanks.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  console.log('tank created: ', tanks);

})();