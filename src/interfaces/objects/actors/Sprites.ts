import Game from '../../Games';

export default interface Sprites {
  spritesSheetCardName: string;
  pictureMapsArray: Array<any>;
  pictureSequence: Array<number>;
  speed: number;
  _last: number;
  clock(): void;
  draw(xpos: number, ypos: number, game: Game): void;
}