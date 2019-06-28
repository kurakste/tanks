import imgLoader from './helpers/imgLoader';
/**
 * 
 * @param {String} name Just any name
 * @param {Number} gameSpeed how many tymes per second we will update game.
 */
class App {

  constructor(name, gameSpeed) {
    // [{name, <img>}, ...] 
    this.spriteSheets = []
    this.name = name;
    this.gameSpeed = 1 / gameSpeed;
    this.work = true;
    this._now = Date.now();
    this._lt = Date.now();
    this.clock = this.clock.bind(this);
  }
  
  clock() {
    this._now = Date.now();
    let dt = (this._now - this._lt);
    if (dt <= this.gameSpeed * 1000) return;
    this._lt = Date.now();
    console.log('tic', dt);
  }

  /**
   * arrOfSpritesheets is:
   *  [
   *    {name: spritesheetName, src:'./img/sprites-full.png'},
   *     ...
   *  ]
   */
  async loadSpritesSheets(arrOfSpritesheets) {
    const promBound = arrOfSpritesheets.map(img => imgLoader(img.src));
    const data = await Promise.all(promBound);
    const out = arrOfSpritesheets.map((el, i) => {
      return { name: el.name, img: data[i] }
    });
    this.spriteSheets = out;
  }

  loadGameMap(arrOfActors) {

  }

  init() {
    console.log('I start well!', this);
  }

}



export default App;