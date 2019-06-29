import KeyboardStates from '../intarfaces/KeyboardStates';

export default class KeyboardState implements KeyboardStates {
  LeftKeyPressed: boolean;
  RightKeyPressed: boolean;
  UpKeyPressed: boolean;
  DownKeyPressed: boolean;
  FierKeyPressed: boolean;
  constructor() {
    this.LeftKeyPressed = false;
    this.RightKeyPressed = false;
    this.UpKeyPressed = false;
    this.DownKeyPressed = false;
    this.FierKeyPressed = false;
  }

}