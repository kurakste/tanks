import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx = canva.getContext('2d');

(async function () {

  const tank = new Tank(20, 30);

  const tanks = new Tanks('Tanks', 6, 600, 600, 'lightblue', ctx);
  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.addFigure(tank);
  tanks.init();
  setInterval(tanks.clock, 8)
  window.addEventListener('keydown',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  window.addEventListener('keyup',(e:KeyboardEvent)=>tanks.keyboardHandler(e));
  console.log('tank created: ', tanks);

})();