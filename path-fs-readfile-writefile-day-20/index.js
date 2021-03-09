const path = require("path")
const fs = require("fs")
const util = require("util")

const filePath = path.join(__dirname, "src", "data.txt")

/* fs.readFile(filePath, "utf8", (err, data) => {
  console.log(data);
}) */

const read = util.promisify(fs.readFile)

;(async () => {
  const data = await read(filePath, "utf8")

  console.log(data);
})()