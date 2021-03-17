const express = require("express")
const fs = require("fs").promises
const path = require("path")
const { v4 } = require("uuid")

const app = express()
app.use(express.json())
const filePath = path.join(__dirname, "posts.json")

const read = fs.readFile
const write= fs.writeFile

const holder = []

const states = [
  { id: 1, name: 'Tashkent' },
  { id: 2, name: 'Namangan'},
  { id: 3, name: 'Andijan'},
  { id: 4, name: 'Fergana'},
  { id: 5, name: 'Jizzax'},
  { id: 6, name: 'Samarqand'},
  { id: 7, name: 'Termiz'},
  { id: 8, name: 'Qarshi'},
  { id: 9, name: 'Navoiy'},
  { id: 10, name: 'Buxoro'},
  { id: 11, name: 'Urganch'},
  { id: 12, name: 'Nukus'}
]

app.get("/", async (req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)
  
  res.send(stringData)
})

app.post("/classified", async(req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)
  
  let stateId = req.body.state
  let stateObj = states.find( state => state.id === stateId)
  
  let newOrders = {
    id: v4(),
    holder_id: v4(),
    state_name: stateObj.name,
    monthlyPrice: req.body.mothlyPrice,
    maxStudents: req.body.maxStudets,
    roomCount: req.body.roomCount,
    address: req.body.address,
    fn: req.body.name,
    ln: req.body.lastname,
    pn: req.body.ph,
  }
  
  let personalInfo = {
    holderId: newOrders.holder_id,
    fullname: newOrders.fn,
    lastname: newOrders.ln,
    phoneNumber: newOrders.pn
  }
  
  let elon = {
    id: newOrders.id,
    holder_id: newOrders.holder_id,
    state_name: newOrders.state_name,
    monthlyPrice: newOrders.monthlyPrice,
    maxStudents: newOrders.maxStudents,
    roomCount: newOrders.roomCount,
    address: newOrders.address
  }

  stringData.push(elon)
  holder.push(personalInfo)
  
  await write(filePath, JSON.stringify(stringData, null, 4))
  
  res.send(elon)
})

app.get("/classified/:id", async (req, res) => {
  const response = await read(filePath, "utf8")
  const stringData = JSON.parse(response)
  
  const foundpObj = stringData.find(obj => obj.id === req.params.id)
  
  res.send(foundpObj)
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(PORT));




