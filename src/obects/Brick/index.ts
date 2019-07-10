import Actor from "../actores/Actor";
import Sprites from '../../interfaces/objects/actors/Sprites';
import Sprite from "../actores/Sprites";
import subsctiptions from '../../interfaces/Subscriptions';

import { brick } from './pictureMap';
import Game from "../../interfaces/Games";


export default class Brick extends Actor {

  activeSprite: Sprites;
  game: Game;
  tick: number;
  health: number;

  constructor(xpos: number, ypos: number, game: Game) {

    const brickSpr = new Sprite(
      "fullSpriteSheet", brick, [0]
    );


    super(xpos, ypos, 3, [brickSpr]);
    this.subsctiptions.push(subsctiptions.hits);
    this.activeSprite = brickSpr;
    this.game = game;
    this.tick = 0;
    this.health = 100;
  }

  clock() {
    (this.health<=0) && this.game.removeFigure(this);
    super.clock();
  }

  
}