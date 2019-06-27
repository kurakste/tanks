import imgLoader from './helpers/imgLoader';

function App(name) {
  // [{name, <img>}, ...] 
  this.spriteSheets = []
  this.name = name;

}
/**
 * arrOfSpritesheets is:
 *  [
 *    {name: spritesheetName, src:'./img/sprites-full.png'},
 *     ...
 *  ]
 */
App.prototype.loadSpritesSheets = async function (arrOfSpritesheets) {
  const promBound = arrOfSpritesheets.map(img => {
    return { name: img.name, prom: imgLoader(img.src) }
  });
  console.log('promboud: ', promBound);
  const data = await Promise.all(promBound.map(el => el.prom));
  console.log('get data: ', data);

}

App.prototype.loadGameMap = function (arrOfActors) {

}

App.prototype.init = function () {
  console.log('I start well!', this);
}

export default App;