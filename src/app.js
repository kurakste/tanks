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
App.prototype.loadSpritesSheets = function (arrOfSpritesheets) {
  const promBound = arrOfSpritesheets.map(img => {
    return { name: img.name, prom: imgLoader(img.src) }
  });
  console.log('promboud: ', promBound);
  (async function () {
    console.log('from async!');
    const data = await Promise.all(promBound.map(el => el.prom));
    console.log('get data:', data);
  })();
  console.log('right next to async');
}

App.prototype.loadGameMap = function (arrOfActors) {

}

App.prototype.init = function () {
  console.log('I start well!', this);
}

export default App;