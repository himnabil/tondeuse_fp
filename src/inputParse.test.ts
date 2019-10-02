import { Input } from "./runner"
import { Command } from "./command"
import inputParse from "./inputParse"
import { Direction } from "./direction"

test("inputParse ", () => {
  const input = `5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA
`

  const expected: Input = {
    surface: { w: 5, h: 5 },
    programs: [
      {
        // 1 2 N ,GAGAGAGAA
        init: {
          p: { x: 1, y: 2 },
          d: Direction.N
        },
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
  expect(inputParse(input)).toStrictEqual(expected)
})
