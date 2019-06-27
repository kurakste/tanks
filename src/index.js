import './styles/main.scss';
import App from './app';
import imShort from './img/sprites.png';
import imFull from './img/sprites-full.png';


const sprSheetsArray = [
  { name: 'fullSpriteSheet', src: imFull },
  { name: 'shortSpritesSheet', src: imShort },
];


const app = new App('Tanks');

app.loadSpritesSheets(sprSheetsArray);
app.init();
