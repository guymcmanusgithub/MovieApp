const express = require('express');
const app = express();
const csv=require('csvtojson')
// var fs = require('fs');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  const jsonObj = require('./movies.json');
  console.log(jsonObj)
  res.send(jsonObj)
  
  // const csvFilePath='movies.csv'
  // csv()
  // .fromFile(csvFilePath)
  // .then((jsonObj)=>{
  //   res.send(jsonObj)
  //   fs.writeFile('movies.json', JSON.stringify(jsonObj), 'utf8', () => null);
  // })
  
})

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));