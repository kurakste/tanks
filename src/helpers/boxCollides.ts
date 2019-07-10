function collides(x: number, y: number, r: number, b: number,
  x2: number, y2: number, r2: number, b2: number) {
  const res = !(r <= x2 || x > r2 ||
    b <= y2 || y > b2);
  return res;
}

function boxCollides(pos:Array<number>, size:number, 
  pos2:Array<number>, size2: number) {
  return collides(pos[0], pos[1],
    pos[0] + size, pos[1] + size,
    pos2[0], pos2[1],
    pos2[0] + size2, pos2[1] + size2);
}

export default boxCollides;