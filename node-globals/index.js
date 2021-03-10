const add = require("./lib.js")

const args = process.argv

args.shift()
args.shift()

const x = args[0] - 0
const y = args[1] - 0

process.stdout.write( add( x, y ) )

//Optional chaining
/* const human = {
  friend: null
}

console.log(human?.friend?.name); */