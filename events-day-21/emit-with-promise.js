const EE = require("events")

let ee = new EE()
let number = null

const data = new Promise((res) => {

  setTimeout(() => {
    res(Math.random())
  }, 5000);
})

data.then(n => {
  ee.emit("ready", n)
})

ee.on("ready", x => {
  console.log(x);
})