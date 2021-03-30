const cols = ['id', 'firstname', 'lastname']
const raws = [ 
  {
    id: 1,
    firstname: 'Jakhongir',
    lastname: 'Sagdullaev'
  },
  
  {
    id: 2,
    firstname: 'Behzod',
    lastname: 'Rafikhov'
  }
]

let rawTable = ""
let topStars = ""
let eachData = ""

function createTable(kolumn, rov) {
  for(let col of kolumn){

    const getColLength = (col) => {
      let maxsArr = []
      raws.forEach((item, index) => {
        maxsArr.push(item[col].length)
      })
      return Math.max(...maxsArr)
    }
    
    rawTable += col + " "
  }
  
  for(let data of rov){
    eachData += " " + data.id + " " + data.firstname + " " + data.lastname + '\n'
  }

  let line = topStars.padEnd(rawTable.length + 1, "-")
  
  return(
    line + "\n" + rawTable + '\n' + line + '\n' + eachData + line
    )
  }
  
  console.log(createTable(cols, raws));
  
  /* rawTable + "\n" + xTable + yTable + zTable */
  
  
  