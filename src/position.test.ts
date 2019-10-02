import { Direction } from "./direction"
import { advanceIn } from "./position"

const surface = { w: 4, h: 5 }
const advance = advanceIn(surface)

const show = ({ x, y }) => `(${x},${y})`
;[
  { current: { x: 3, y: 3 }, direction: Direction.N, advanced: { x: 3, y: 4 } },
  { current: { x: 3, y: 3 }, direction: Direction.S, advanced: { x: 3, y: 2 } },
  { current: { x: 3, y: 3 }, direction: Direction.E, advanced: { x: 4, y: 3 } },
  { current: { x: 3, y: 3 }, direction: Direction.W, advanced: { x: 2, y: 3 } },
  { current: { x: 3, y: 5 }, direction: Direction.N, advanced: { x: 3, y: 5 } },
  { current: { x: 3, y: 0 }, direction: Direction.S, advanced: { x: 3, y: 0 } },
  { current: { x: 3, y: 4 }, direction: Direction.E, advanced: { x: 4, y: 4 } },
  { current: { x: 3, y: 0 }, direction: Direction.W, advanced: { x: 2, y: 0 } }
].forEach(({ current, direction, advanced }) => {
  test(`${show(current)} = ${direction} => ${show(advanced)}`, () => {
    expect(advance(current, direction)).toEqual(advanced)
  })
})
