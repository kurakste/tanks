import './styles/main.scss';
import Tanks from './obects/Tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';


(async function () {
  const tanks = new Tanks('Tanks', 1);
  await tanks.loadSpritesSheets(sprSheetsArray);
  tanks.init();
  setInterval(tanks.clock, 8)
})();