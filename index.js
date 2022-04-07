const express = require('express')

const app = express()
const port = 3000

app
  .get('*',(req, res, next) => {
    req.date = new Date();
    next();
  })
  .get('/', (req, res) => {
    res.send('You are on the Homepage');
  })
  .get('/about', (req,res) => {
    res.send('You are on the about page');
  })
  .get('/contact', (req,res) => {

    const data = {};
    data.name = 'John';
    data.age ='32';
    data.city ='Newpaltz';
    data.state ='NY';

    res.send({
      email: 'mounika@newpaltz.edu',
      phone: '123-456-7890',
      twitter: '@qwerty',
      instagram:'@abcdef'  
    });
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})