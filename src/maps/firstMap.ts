const map = [
  'bbbbbbbbbbboooooooo',
  'ooooooooooooooooooo',
  'ooooooooooooooooooo',
  'ooboooooooooooooooo',
  'oobbbbbbooooooooooo',
  'ooboooobooooooooooo',
  'oobbbbbbooooooooooo',
  'oobbooobooggggggooo',
  'oobbbbbboogoooogooo',
  'oooooooooogoooogooo',
  'oooooooooogoooogooo',
  'ovvvvvvvvvvvvvvvvvo',
  'ooooooohooooooooooo',
  'ooooooohooooooooooo',
  'ooooooohooooooooooo',
  'ooooooohooooooooooo',
  'ooooooohooooooooooo',
  'ooooooohooooooooooo',
  'ooooooooooooooooooo',
];

const enemyStartPoints = [
  [32*1, 32*2], [608-32*1, 32*1], [32*8, 32], [32*2, 32*10]
];
const herroStartPoints = [
  [32*2, 608-32]
]

export {
  map, herroStartPoints, enemyStartPoints
}
/* 
  o - blank field;
  b - Blue brick 
  g - green brick
  h - block
  v - vegetation
*/