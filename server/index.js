const express = require('express');
const PORT = 3000;
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./db/index');

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use(express.json());
app.use(morgan('dev'))

app.get('/add', (req, res) => {
  db.query('SELECT * FROM movielist', function (err, results) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(results);
    }
  })
});

app.post('/', (req, res) => {
  const {name, watched} = req.body;
  
  db.query('INSERT INTO movielist (name, watched) VALUES (?, ?)', [name, watched], (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.sendStatus(200);
    }
  })
});
