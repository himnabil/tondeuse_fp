import { Command } from "./command"

export enum Direction {
  N = "N",
  S = "S",
  E = "E",
  W = "W"
}

const turningMap = {
  N: { A: Direction.N, D: Direction.E, G: Direction.W },
  E: { A: Direction.E, D: Direction.S, G: Direction.N },
  S: { A: Direction.S, D: Direction.W, G: Direction.E },
  W: { A: Direction.W, D: Direction.N, G: Direction.S }
}

export const nextDirection = (d: Direction, c: Command): Direction =>
  turningMap[d][c]
