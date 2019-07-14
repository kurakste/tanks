import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';
import {map, herroStartPoints, enemyStartPoints} from './maps/firstMap';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx = canva.getContext('2d');


(async function () {

  const tanks = new Tanks('Tanks', 25 , 608, 608, 'black', ctx);
  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.loadGameMap(map,  enemyStartPoints,  herroStartPoints);

  // const tank = new Tank(32, 550, tanks);
  // const figures = [tank];
  // figures.map( fig => tanks.addFigure(fig));
  tanks.init();
  setInterval(tanks.clock, 8);
  window.addEventListener('keydown',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
})();