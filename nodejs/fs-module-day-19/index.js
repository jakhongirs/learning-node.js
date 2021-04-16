const fs = require("fs")

fs.readFile("./data.txt", "utf8", (err, data) => {
  if(err){
    console.log(err);
  } 
  
  else{
    console.log(data);
  }
})

/* Bu bizga async promised based o'qish hisoblanadi ya'ni tepadagi file-ni ya'ni datani topa olsagina keyin 
pastdagi utib if yoki then desak ham bo'ladi o'shalarni o'qib beradi. */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

