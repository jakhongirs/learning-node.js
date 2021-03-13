//write
const fs = require("fs").promises
const path = require("path")
const util = require("util")

const arguments = [,, productname, quantity] = process.argv
const filePath = path.join(__dirname, "data.txt")

const func = async () => {
  const stringData =  await fs.readFile(filePath, "utf8")
  const dataJson = JSON.parse(stringData)
  
  const existProduct = dataJson.find(product => productname.toLowerCase() === product.name.toLowerCase())
  
  if(existProduct){
    existProduct.quantity = Number(existProduct.quantity) + Number(quantity)
    existProduct.left = Number(existProduct.quantity) - Number(existProduct.sold)
  }
  
  else{
    dataJson.push({
      name: productname,
      quantity: quantity,
      sold: 0,
      left: quantity
    })
  }
  
  await fs.writeFile(filePath, JSON.stringify(dataJson))
  console.log(quantity + " ta " + productname + " muvaffaqiyatli qo'shildi!");
}

func()


