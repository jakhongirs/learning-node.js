//sell
const fs = require("fs").promises
const path = require("path")
const util = require("util")

const arguments = [,, productname, quantity] = process.argv
const filePath = path.join(__dirname, "data.txt")

const func = async () => {
  const stringData =  await fs.readFile(filePath, "utf8")
  const dataJson = JSON.parse(stringData)
  
  const existProduct = dataJson.find(product => productname.toLowerCase() === product.name.toLowerCase())

  if(Number(quantity) > existProduct.left){
    return console.log("Hisob kitoblar iqtisodiyotga mos emas");
  }

  if(existProduct){
    existProduct.sold += Number(quantity)
    existProduct.left = Number(existProduct.quantity) - Number(existProduct.sold)
  }


  await fs.writeFile(filePath, JSON.stringify(dataJson))
  console.log(quantity + " ta " + productname + " sotildi!");
}

func()