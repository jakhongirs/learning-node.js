const express = require("express")
const routes = require("./src/routes")

const server = express()
const port = process.env.PORT || 4040
server.use(routes)

server.listen(port, () => {
  console.log("Server is running in: " + port);
})