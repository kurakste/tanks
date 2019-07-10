interface Hittable {
  healht: number;

  checkForHits(x: number, y:number, size: number, damage: number, attackerId: string): boolean;
}