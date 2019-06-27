import './styles/main.scss';
import App from './app';
import sprSheetsArray from './img/imgSpritesheetsArr';


(async function () {
  const app = new App('Tanks');
  await app.loadSpritesSheets(sprSheetsArray);
  app.init();

})();
