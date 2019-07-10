import Actor from "../actores/Actor";
import Sprites from '../../interfaces/objects/actors/Sprites';
import Sprite from "../actores/Sprites";

import { vegetation } from './pictureMap';
import Game from "../../interfaces/Games";


export default class Fier extends Actor {

  activeSprite: Sprites;
  game: Game;
  tick: number;

  constructor(xpos: number, ypos: number, game: Game) {

    const vegSpr = new Sprite(
      "fullSpriteSheet", vegetation, [0]
    );


    super(xpos, ypos, 3, [vegSpr]);
    this.activeSprite = vegSpr;
    this.game = game;
    this.tick = 0;
  }

}