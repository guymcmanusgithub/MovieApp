const express = require('express');
const app = express();
const csv=require('csvtojson')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/', (req, res) => {
  const csvFilePath='movies.csv'
  csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    res.send(jsonObj)
  })
  // const movies = [
  //   {
  //     movieID: 1,
  //     title: 'Jurassic Park',  
  //   },
  //   {
  //     movieID: 2,
  //     title: 'Jurassic Park 2',  
  //   },
  //   {
  //     movieID: 3,
  //     title: 'Jurassic Park 3',  
  //   }
  // ];
 
  
})

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));