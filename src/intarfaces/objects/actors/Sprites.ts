import Game from '../../../intarfaces/Game';

export default interface Sprites {
  spritesSheetCardName: string;
  pictureMapsArray: Array<any>;
  pictureSequence: Array<number>;
  speed: number;
  _last: number;
  getCurrentImage(game: Game):void;
}