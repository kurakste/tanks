import Sprites from '../../intarfaces/objects/actors/Sprites';
import Game from '../../intarfaces/Games';

export default class Sprite implements Sprites {
  spritesSheetCardName: string;
  pictureMapsArray: Array<any>;
  pictureSequence: Array<number>;
  speed: number;
  _last: number;

  constructor(
    spritesSheetCardName: string,
    pictureMapsArray: Array<any>,
    pictureSequence: Array<number>) {

    this.spritesSheetCardName = spritesSheetCardName;
    this.pictureMapsArray = pictureMapsArray;
    this.pictureSequence = pictureSequence;
    this.speed = this.speed;
  }

  draw(xpos: number, ypos: number, game: Game): void {
    console.log('Get current image');
  }
}