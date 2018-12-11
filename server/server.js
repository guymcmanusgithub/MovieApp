const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const movies = [
    {
      movieID: 1,
      title: 'Jurassic Park',  
    },
    {
      movieID: 2,
      title: 'Jurassic Park 2',  
    },
    {
      movieID: 3,
      title: 'Jurassic Park 3',  
    }
  ];

  res.json(movies);
})

const port = 5000;
app.listen(port, () => console.log(`listening on port ${port}`));