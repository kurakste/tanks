import './styles/main.scss';
import App from './app';
import sprSheetsArray from './img/imgSpritesheetsArr';


(async function () {
  const app = new App('Tanks', 1/24);
  await app.loadSpritesSheets(sprSheetsArray);
  app.init();
  setInterval(app.clock, 8)

})();