const tankUp = [
  { x: 0 + 14 * 32, y: 0, width: 32, height: 32, },
]

const tankDown = [
  { x: 0 + 14 * 32, y: 0 + 4 * 32, width: 32, height: 32, },
]

const tankLeft = [
  { x: 0 + 17 * 32, y: 0 + 2 * 32, width: 32, height: 32, },
]

const tankRight = [
  { x: 0 + 19 * 32, y: 0 + 3 * 32, width: 32, height: 32, },
]

const tankGoUp = [
  { x: 0 + 14 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 17 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 18 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 19 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 20 * 32, y: 0, width: 32, height: 32, },
  { x: 0 + 21 * 32, y: 0, width: 32, height: 32, },
]

const tankGoDown = [
  { x: 0 + 15 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 17 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 18 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 19 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 20 * 32, y: 32, width: 32, height: 32, },
  { x: 0 + 21 * 32, y: 32, width: 32, height: 32, },
]

const tankGoRight = [
  { x: 0 + 15 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 1 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 2 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 3 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 4 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 5 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 15 * 32, y: 6 * 32 + 64, width: 32, height: 32, },
]

const tankGoLeft = [
  { x: 0 + 16 * 32, y: 0 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 1 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 2 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 3 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 4 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 5 * 32 + 64, width: 32, height: 32, },
  { x: 0 + 16 * 32, y: 6 * 32 + 64, width: 32, height: 32, },
]

const fire = [
  { x: 0 + 0 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
  { x: 0 + 1 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
  { x: 0 + 2 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
]

ballLeft  = [
  { x: 0 + 5 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
]

ballRight  = [
  { x: 0 + 4 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
]

ballUp  = [
  { x: 0 + 6 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
]

ballDown  = [
  { x: 0 + 3 * 32, y: 0 + 0 * 32, width: 30, height: 30, }, 
]

export {
  tankDown, tankLeft, tankRight, tankUp,
  tankGoDown, tankGoLeft, tankGoRight, tankGoUp,
  fire, ballLeft, ballRight, ballUp, ballDown
}