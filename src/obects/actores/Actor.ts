import Actors from '../../interfaces/objects/actors/Actores';
import Game from '../../interfaces/Games';
import Sprites from '../../interfaces/objects/actors/sprites';
import Directions from '../../interfaces/objects/actors/Directions';
import subsctiptions from '../../interfaces/Subscriptions';

export default class Actor implements Actors {
  xpos: number;
  ypos: number;
  xsize: number;
  ysize: number;
  speed: number;
  sprites: Array<Sprites>;
  subsctiptions: Array<subsctiptions>

  constructor(
    xpos: number, ypos: number, speed: number, sprites: Array<Sprites>
  ) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.sprites = sprites;
    this.speed = speed;
    this.subsctiptions = [subsctiptions.clock]
  }

  move(direction: Directions, game: Game) {

  }

  clock() {
    console.log('clock from Actor');
  }

  draw(game: Game) {
    console.log('hellow from draw from Actor');

  }

}