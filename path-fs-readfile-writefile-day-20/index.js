const path = require("path")
const fs = require("fs")
const util = require("util")

const filePath = path.join(__dirname, "src", "data.txt")

/* fs.readFile(filePath, "utf8", (err, data) => {
  console.log(data);
}) */

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)

;(async () => {
  const content = await read(filePath, "utf8")
  const data = JSON.parse(content)

  data.push("Sanjar")
  write(filePath, JSON.stringify(data))
})()
