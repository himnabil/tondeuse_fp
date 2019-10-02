import { Surface } from "./surface"
import { Position, advanceIn } from "./position"
import { Direction, nextDirection } from "./direction"
import { Command } from "./command"

export class Mower {
  readonly p: Position
  readonly d: Direction
}

export const executeIn = (s: Surface) => {
  const advance = advanceIn(s)
  return ({ p, d }: Mower, c: Command): Mower => ({
    d: nextDirection(d, c),
    p: c === Command.A ? advance(p, d) : p
  })
}
