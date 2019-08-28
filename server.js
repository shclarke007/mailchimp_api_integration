const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=> 
  res.json('Get Success')
)

app.post('/subscribe', (req, res) => {
  const {name, email} = req.body
  res.json('Post Success')
}

)

app.listen(port, ()=> console.log(`Listening on port ${port}`))

