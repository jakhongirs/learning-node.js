const express = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")
const fs = require("fs").promises
const ejs = require("ejs")


const app = express()


app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Headers", "*")
  
  next()
})

app.use(express.json())
app.use(fileUpload())

const read = fs.readFile
const write = fs.writeFile

//EJS
app.engine("ejs", ejs.renderFile)
app.set("view engine", "ejs")
//Making Static File:
app.use("/uploads", express.static(path.join(__dirname,"uploads")))

app.get("/", async (req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)

  res.render("app", {
    data: stringData
  })
})

app.get("/upload", async (req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)

  res.render("index")
})


const filePath = path.join(__dirname, "database.json")

app.get("/users",async(req,res)=> {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)
  res.send(stringData)
})
//Posting photo:
app.post("/upload", async (req, res) => {

  if (!req.files) {return res.send("please upload photo")}

  const file = req.files.userPhoto

  //Post the name:
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)
  const prefixId  =  Date.now()
  const filePathPhoto = path.join(__dirname, "/uploads", prefixId + file.name)
  
  if(file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    
    file.mv(filePathPhoto, (err) => {
      console.log(err)
      return;
    })
    
    const newObj = {
      username: req.body.fullName,
      monthlyPrice: req.body.monthlyPrice,
      postRegion: req.body.region,
      roomCount: req.body.roomCount,
      phonenumber: req.body.phoneNumber,
      userPhoto: `/uploads/${prefixId}${file.name}`
    }
    
    stringData.unshift(newObj)
    
    write(filePath, JSON.stringify(stringData, null, 4))
    
    res.status(201).redirect('/')
  } 
  else{
    return res.status(401).end()
  }
})

//Server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(PORT));