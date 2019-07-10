import Actor from "../actores/Actor";
import Sprites from '../../interfaces/Sprites';
import Sprite from "../actores/Sprites";
import subsctiptions from '../../interfaces/Subscriptions';

import { vegetation } from './pictureMap';
import Game from "../../interfaces/Games";


export default class Fier extends Actor {

  activeSprite: Sprites;
  game: Game;
  tick: number;
  health: number;

  constructor(xpos: number, ypos: number, game: Game) {

    const vegSpr = new Sprite(
      "fullSpriteSheet", vegetation, [0]
    );


    super(xpos, ypos, 3, [vegSpr]);
    this.subsctiptions.push(subsctiptions.hits);
    this.activeSprite = vegSpr;
    this.game = game;
    this.tick = 0;
    this.health = 100;
  }

  clock() {
    (this.health<=0) && this.game.removeFigure(this);
    super.clock();
  }

  
}