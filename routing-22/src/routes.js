const router = require("express").Router()

const Home = require("./controllers/home")
const User = require("./controllers/user")

router.get("/", Home.GET)
router.get("/user", User.GET)

module.exports = router