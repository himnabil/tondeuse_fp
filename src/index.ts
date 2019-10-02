import { readFileSync } from "fs"
import { run } from "./runner"
import parseInput from "./inputParse"
const input = readFileSync(process.argv[2]).toString()

run(parseInput(input)).forEach(({ p: { x, y }, d }) =>
  console.log(`${x} ${y} ${d}`)
)
