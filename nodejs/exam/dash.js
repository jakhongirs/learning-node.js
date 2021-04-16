//write
const fs = require("fs").promises
const path = require("path")
const util = require("util")

const filePath = path.join(__dirname, "data.txt")

const func = async () => {
  const stringData =  await fs.readFile(filePath, "utf8")
  const dataJson = JSON.parse(stringData)
  console.table(dataJson)
  }

func()


