interface Hittable {
  health: number;

  getsHit(damage: number):void;
}
export default Hittable;