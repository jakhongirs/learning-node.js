const express = require("express")
const articles = require("./data.js")
const app = express()

const port = process.env.PORT || 4015

app.set("view engine", "ejs")
app.use(express.static("static"))

//Bu controller viewerga yuboradi. Viewer esa bu html desak ham bo'ladi
app.get("/", (req, res) => {
  res.render("index", {name: "Bahodir"})
})

app.get("/users", (req, res) => {
  res.render("users", {users: ["Bahodir", "Jahongir"]})
}) 

app.get("/homework", (req, res) => {
  res.render("homework", {news: articles})
}) 
//Agar bizda get request bo'lsa va page-miz home bo'lsa, controller funksiya ishlasin deymiz.
// MVC - Model Viewer Controller
/* Tepadagi callback funksiya controller vzifasini bajaradi, masalan saytga kirgan vaqtimiz u bazadan ma'lumot
olib VIEWER-ga junatishi mumkin. */
//Request - bu serverga kelayotgan zapros.
//Response - esa bu o'shanga javob.


app.listen(port, () => {
  console.log("Server is ready at http://localhost:" + port);
})

//Express orqali server yasadik)

