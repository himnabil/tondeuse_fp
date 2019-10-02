import { Surface } from "./surface"
import { Mower, executeIn } from "./mower"
import { Command } from "./command"

export interface MowerProgram {
  readonly init: Mower
  readonly commands: Command[]
}

export interface Input {
  readonly surface: Surface
  readonly programs: MowerProgram[]
}

const runProgramIn = (s: Surface) => {
  const execute = executeIn(s)
  return ({ commands, init }: MowerProgram): Mower =>
    commands.reduce(execute, init)
}

export const run = ({ surface, programs }: Input): Mower[] => {
  const runProgram = runProgramIn(surface)
  return programs.map(runProgram)
}
