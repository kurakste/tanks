import Actor from "../actores/Actor";
import Sprites from '../../interfaces/Sprites';
import Sprite from "../actores/Sprites";
import subsctiptions from '../../interfaces/enum/Subscriptions';
import { brick, brick70, brick40, brick10 } from '../BarrierFab/brickMap';
import Game from "../../interfaces/Games";
import Hittable from "../../interfaces/Hittable";


export default class Brick extends Actor implements Hittable {
  activeSprite: Sprites;
  game: Game;
  tick: number;
  health: number;
  maxHealth: number;

  constructor(xpos: number, ypos: number, game: Game, sprites: Array<Sprites>) {

    

    super(xpos, ypos, 3, sprites);
    this.subsctiptions.push(subsctiptions.hits);
    this.activeSprite = sprites[0];
    this.game = game;
    this.tick = 0;
    this.health = 100;
    this.maxHealth =100;
  }



  clock() {
    (this.health<=0) && this.game.removeFigure(this);
    super.clock();
  }

  getsHit(damage: number) {
    this.health = this.health - damage
  }

  _getSprite(): Sprites {
    const health = 100 * this.health/this.maxHealth;
    let index = Math.floor((100 - health)/30);
    index = (index>=3) ? 3 : index;
    return this.sprites[index];
  }


  
}