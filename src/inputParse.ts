import { Input, MowerProgram } from "./runner"
import { Surface } from "./surface"
import { Mower } from "./mower"
import { Command } from "./command"
import { Direction } from "./direction"

const pairLines = (array: string[]): string[][] => {
  if (!array || array.length == 0) {
    return []
  }
  const [fst, snd, ...rest] = array
  return [[fst, snd], ...pairLines(rest)]
}

export default (input: string): Input => {
  const [fstLine, ...line] = input.trim().split("\n")
  const surfaceIn = fstLine.split(" ")
  if (surfaceIn.length != 2) {
    throw new Error("1st line should contain 2 args")
  }
  const [w, h] = surfaceIn.map(s => parseInt(s))
  const surface = { w, h }
  const programsLines = pairLines(line)
  const programs: MowerProgram[] = programsLines.map(
    ([initLine, commandLine]) => {
      //todo check has 3 element
      const [x, y, d] = initLine.split(" ")
      const init: Mower = {
        p: { x: parseInt(x), y: parseInt(y) },
        d: d as Direction
      }
      //todo check command is valid
      const commands: Command[] = commandLine.split("") as Command[]
      return { init, commands }
    }
  )
  return { surface, programs }
}
