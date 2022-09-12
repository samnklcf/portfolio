const fs = require('fs')

fs.appendFile("text.json","Je suis la", (err) => {
    if(err) throw err;
    console.log("bien");
    

  })