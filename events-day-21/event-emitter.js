/* const EventEmitter = require("events")

const ee = new EventEmitter()

ee.on("click", () => {
  console.log("clicked...");
});

ee.emit("click") */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Another Example:

const EventEmitter = require("events")

const ee = new EventEmitter()

ee.on("connect", () => {
  console.log("connected to the database...");
})

ee.emit("connect")
ee.emit("connect")
ee.emit("connect")
ee.emit("connect")
ee.emit("connect")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
