const express = require("express")
const fileUpload = require("express-fileupload")
const path = require("path")


const app = express()
app.use("/uploads",express.static(path.join(__dirname,"uploads")))

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.use(fileUpload())

app.post("/upload", (req, res) => {
  const file = req.files.userPhoto

  const filePath = path.join(__dirname, "/uploads", Date.now() + file.name)
  if(file.mimetype === "image/png") {
    
    file.mv(filePath, (err) => {
      console.log(err)
    })

    res.status(201).send({ message: "Created", })
  } 
  else{
    res.status(401).end()
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(PORT));