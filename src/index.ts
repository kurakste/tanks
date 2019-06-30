import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';

const canva = <HTMLCanvasElement>document.getElementById('cbox');
const ctx  = canva.getContext('2d');

(async function () {

  const tank = new Tank(20, 30, 5, []);
  console.log('tank created: ', tank);

  const tanks = new Tanks('Tanks', 1, 600, 600, 'lightblue', ctx);
  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.addFigure(tank);
  tanks.init();
  setInterval(tanks.clock, 8)

})();