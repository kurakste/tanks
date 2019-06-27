import imgLoader from './helpers/spriteLoader';

function App(name) {
  // [{name, <img>}, ...] 
  this.spriteSheets = []
  this.name = name;

}
/**
 * arrOfSpritesheets is:
 *  [
 *    {name: spritesheetName, path:'./img/sprites-full.png'},
 *     ...
 *  ]
 */
App.prototype.loadSpritesSheets = function (arrOfSpritesheets) {
  const promBound = arrOfSpritesheets.map(spr => {
    return imgLoader(src)

  });

}

App.prototype.loadGameMap = function (arrOfActors) {

}

App.prototype.init = function () {
  console.log('I start well!', this);
}

export default App;