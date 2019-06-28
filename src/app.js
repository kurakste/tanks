import imgLoader from './helpers/imgLoader';

function App(name, gameSpeed) {
  // [{name, <img>}, ...] 
  this.spriteSheets = []
  this.name = name;
  this.gameSpeed = gameSpeed;
  this.work = true;
  console.log('from init', this.gameSpeed);
  this.clock = () => {
    now = Date.now();
    let dt = (now-lt);
    if (dt <= this.gameSpeed*1000) return;
    lt = Date.now();
    console.log('tic', dt);
  }
}
let now = Date.now();
let lt = Date.now();
/**
 * arrOfSpritesheets is:
 *  [
 *    {name: spritesheetName, src:'./img/sprites-full.png'},
 *     ...
 *  ]
 */
App.prototype.loadSpritesSheets = async function (arrOfSpritesheets) {
  const promBound = arrOfSpritesheets.map(img => imgLoader(img.src));
  const data = await Promise.all(promBound);
  const out = arrOfSpritesheets.map((el, i) => {
    return { name: el.name, img: data[i] }
  });
  this.spriteSheets = out;
}

App.prototype.loadGameMap = function (arrOfActors) {

}


App.prototype.init = function () {
  console.log('I start well!', this);
}

export default App;