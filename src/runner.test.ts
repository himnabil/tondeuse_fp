import { Input, run } from "./runner"
import { Command } from "./command"
import { Direction } from "./direction"

test(" runner ", () => {
  const input: Input = {
    surface: { w: 5, h: 5 },
    programs: [
      {
        // 1 2 N ,GAGAGAGAA
        init: { p: { x: 1, y: 2 }, d: Direction.N },
        commands: [
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.A
        ]
      },
      {
        // 3 3 E , AADAADADDA
        init: {
          p: { x: 3, y: 3 },
          d: Direction.E
        },
        commands: [
          Command.A,
          Command.A,
          Command.D,
          Command.A,
          Command.A,
          Command.D,
          Command.A,
          Command.D,
          Command.D,
          Command.A
        ]
      }
    ]
  }
  // 1 3 N
  // 5 1 E
  const expected = [
    { p: { x: 1, y: 3 }, d: Direction.N },
    { p: { x: 5, y: 1 }, d: Direction.E }
  ]
  expect(run(input)).toEqual(expected)
})
