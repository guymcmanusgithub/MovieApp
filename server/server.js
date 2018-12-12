const express = require('express');
const app = express();
const csv =require('csvtojson')
// var fs = require('fs');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/movies', (req, res) => {
  const jsonObj = require('./movies.json');
  // console.log(jsonObj)
  res.send(jsonObj)
})
  // const csvFilePath='movies.csv'
  // csv()
  // .fromFile(csvFilePath)
  // .then((jsonObj)=>{
  //   res.send(jsonObj)
  //   fs.writeFile('movies.json', JSON.stringify(jsonObj), 'utf8', () => null);
  // })

app.get('/movies/:id', (req, res) => {
  const jsonObj = require('./movies.json');
  const {id} = req.params;
  const movie = jsonObj.find(item => { return item.movieId === id})
  console.log(movie)
  // console.log(movie.title)
  return res.send(movie)
})

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));