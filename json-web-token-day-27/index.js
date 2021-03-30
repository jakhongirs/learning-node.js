const express = require("express")
const path = require("path")
const fs = require("fs").promises
const { v4 } = require("uuid")
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

const key = "zebra"
const emptyArray = []

const filePath = path.join(__dirname, "users.json")

const read = fs.readFile
const write = fs.writeFile

//Get Users Info:
app.get("/users", async(req, res)=> {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)

  try{
    const payload = jwt.verify(req.headers.access_token, key)

    if(payload.role === "admin" || payload.role === "manager"){

      res.send(stringData)
    }else{
      res.send(emptyArray)
    }
  }catch(error){
    res.send(error)
  }

})

//Post Users Info:
app.post("/signup", async (req, res) => {

  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)

  const newObj = {
    id: v4(),
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    fullname: req.body.fullname
  }
  
  stringData.unshift(newObj)
  
  write(filePath, JSON.stringify(stringData, null, 4))
  
  res.status(201).send("Ma'lumot qo'shildi!")
})

//Login:
app.post("/login", async(req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)

  const user = stringData.find(user => user.username === req.query.username && user.password === req.query.password)


  try{
    if(user){
      res.send(jwt.sign(user, key))
    }else(
      res.send("error")
      )

    }catch(error){
      res.send(error)
    }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(PORT));