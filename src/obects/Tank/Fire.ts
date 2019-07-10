import Actor from "../actores/Actor";
import Sprites from '../../interfaces/Sprites';
import Sprite from "../actores/Sprites";

import { fire } from './pictureMap';
import Game from "../../interfaces/Games";


export default class Fier extends Actor {

  activeSprite: Sprites;
  game: Game;
  tick: number;

  constructor(xpos: number, ypos: number, game: Game) {

    const fireSpr = new Sprite(
      "fullSpriteSheet", fire, [0, 1, 2, 1, 0]
    );


    super(xpos, ypos, 3, [fireSpr]);

    this.activeSprite = fireSpr;
    this.game = game;
    this.tick = 0;
  }
  clock() {
    if (this.tick>=4) this.game.removeFigure(this);
    super.clock();
    ++this.tick
  }

}
