import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';
import Tank from './obects/Tank';


(async function () {
  const tank = new Tank(20, 30, 5, []);
  console.log('tank created: ', tank);

  const tanks = new Tanks('Tanks', 1);
  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.addFigure(tank);
  tanks.init();

  setInterval(tanks.clock, 8)
})();