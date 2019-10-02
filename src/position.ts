import { Surface } from "./surface"
import { Direction } from "./direction"

export interface Position {
  readonly x: number
  readonly y: number
}

const increment = {
  N: { x: 0, y: 1 },
  S: { x: 0, y: -1 },
  E: { x: 1, y: 0 },
  W: { x: -1, y: 0 }
}
const normalizeNumber = (min: number, max: number) => (x: number) =>
  x > max ? max : x < min ? min : x

const normalizeIn = ({ w, h }: Surface) => {
  const normalizeX = normalizeNumber(0, w)
  const normalizeY = normalizeNumber(0, h)
  return ({ x, y }: Position): Position => ({
    x: normalizeX(x),
    y: normalizeY(y)
  })
}
const add = (a: Position, b: Position): Position => ({
  x: a.x + b.x,
  y: a.y + b.y
})

export const advanceIn = (s: Surface) => {
  const normalize = normalizeIn(s)
  return (p: Position, d: Direction): Position =>
    normalize(add(p, increment[d]))
}
