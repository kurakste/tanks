import './styles/main.scss';
import Tanks from './tanks';
import sprSheetsArray from './img/imgSpritesheetsArr';


(async function () {
  const app = new Tanks('Tanks', 1);
  await app.loadSpritesSheets(sprSheetsArray);
  app.init();
  setInterval(app.clock, 8)
})();