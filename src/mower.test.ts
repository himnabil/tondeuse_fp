import { Mower, executeIn } from "./mower"
import { Command } from "./command"
import { Direction } from "./direction"

const surface = { w: 4, h: 5 }
const execute = executeIn(surface)

const show = ({ p: { x, y }, d }) => `( ${x}, ${y}, ${d} )`
;[
  {
    s: { p: { x: 3, y: 3 }, d: Direction.N },
    c: Command.A,
    e: { p: { x: 3, y: 4 }, d: Direction.N }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.S },
    c: Command.A,
    e: { p: { x: 3, y: 2 }, d: Direction.S }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.E },
    c: Command.A,
    e: { p: { x: 4, y: 3 }, d: Direction.E }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.W },
    c: Command.A,
    e: { p: { x: 2, y: 3 }, d: Direction.W }
  },

  {
    s: { p: { x: 3, y: 3 }, d: Direction.N },
    c: Command.D,
    e: { p: { x: 3, y: 3 }, d: Direction.E }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.S },
    c: Command.D,
    e: { p: { x: 3, y: 3 }, d: Direction.W }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.E },
    c: Command.D,
    e: { p: { x: 3, y: 3 }, d: Direction.S }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.W },
    c: Command.D,
    e: { p: { x: 3, y: 3 }, d: Direction.N }
  },

  {
    s: { p: { x: 3, y: 3 }, d: Direction.N },
    c: Command.G,
    e: { p: { x: 3, y: 3 }, d: Direction.W }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.S },
    c: Command.G,
    e: { p: { x: 3, y: 3 }, d: Direction.E }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.E },
    c: Command.G,
    e: { p: { x: 3, y: 3 }, d: Direction.N }
  },
  {
    s: { p: { x: 3, y: 3 }, d: Direction.W },
    c: Command.G,
    e: { p: { x: 3, y: 3 }, d: Direction.S }
  },

  {
    s: { p: { x: 3, y: 5 }, d: Direction.N },
    c: Command.A,
    e: { p: { x: 3, y: 5 }, d: Direction.N }
  },
  {
    s: { p: { x: 3, y: 0 }, d: Direction.S },
    c: Command.A,
    e: { p: { x: 3, y: 0 }, d: Direction.S }
  },
  {
    s: { p: { x: 4, y: 3 }, d: Direction.E },
    c: Command.A,
    e: { p: { x: 4, y: 3 }, d: Direction.E }
  },
  {
    s: { p: { x: 0, y: 3 }, d: Direction.W },
    c: Command.A,
    e: { p: { x: 0, y: 3 }, d: Direction.W }
  }
].forEach(({ s, c, e }) => {
  test(`${show(s)} exec ${c} ==> ${show(e)}`, () => {
    expect(execute(s, c)).toEqual(e)
  })
})
