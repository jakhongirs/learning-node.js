const express = require("express")
const { v4 } = require("uuid")
const fs = require("fs")
const util = require("util")
const { json } = require("express")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*")
  res.set("Access-Control-Allow-Header", "*")

  next()
})

const read = util.promisify(fs.readFile)
const write = util.promisify(fs.writeFile)


//GET
app.get("/movies", async (_, res) => {
  const content = await read("./data.txt", "utf8")
  const movies = JSON.parse(content)

  res.send(movies)
})

//POST
app.post("/movies", async (req, res) => {
  const newMovie = {
    id: v4(), 
    name: req.body.name,
    price: req.body.price,
  }

  const content = await read("./data.txt", "utf8")
  const movies = JSON.parse(content)
  
  movies.push(newMovie)

  await write("./data.txt", JSON.stringify(movies))

  res.status(201).send(newMovie)
})

//EDIT
app.put("/movies", async(req, res) => {

  const content = await read("./data.txt", "utf8")
  const movies = JSON.parse(content)
  
  const movie = movies.find(movie => movie.id === req.body.id)
  
  if (movie) {
    movie[req.body.column] = req.body.value
    
    await write("./data.txt", JSON.stringify(movies))
    res.send(movie)
  }
  else {
    res.send("Error")
  }
  
  res.send("ok")
})

//DELETE
app.delete("/movies", async (req, res) => {
  const content = await read("./data.txt", "utf8")
  const movies = JSON.parse(content)

  const movieId = movies.findIndex(movie => movie.id === req.body.id)
  
  
  if(movieId > -1){
    const movie = movies[movieId]
    movies.splice(movieId, 1)

    await write("./data.txt", JSON.stringify(movies))

    res.send(movie)
  }
  else{
    res.send("error")
  }
  
})

app.listen(5001, () => console.log(5001))