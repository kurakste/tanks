import Sprites from '../../interfaces/objects/actors/Sprites';
import Game from '../../interfaces/Games';

export default class Sprite implements Sprites {
  spritesSheetCardName: string;
  pictureMapsArray: Array<any>;
  pictureSequence: Array<number>;
  speed: number;
  _last: number;
  _curentState: number;

  constructor(spritesSheetCardName: string, pictureMapsArray: Array<any>,
      pictureSequence: Array<number>) {

    this.spritesSheetCardName = spritesSheetCardName;
    this.pictureMapsArray = pictureMapsArray;
    this.pictureSequence = pictureSequence;
    this.speed = this.speed;
    this._curentState = 0;
  }

  draw(xpos: number, ypos: number, game: Game): void {
    const ctx = game.ctx;
    const imgSheet = game.spriteSheets.filter((el: any) => el.name === this.spritesSheetCardName)[0];
    const cmap = this.pictureMapsArray[this._curentState]
    ctx.drawImage(
      imgSheet.img,
      cmap.x, cmap.y, cmap.height, cmap.width, xpos, ypos, cmap.height, cmap.width
    )

  }

  clock() {
    if (this.pictureMapsArray.length<=1) return;
    ++this._curentState;
    if (this._curentState>=this.pictureMapsArray.length) this._curentState = 0; 
  }
}