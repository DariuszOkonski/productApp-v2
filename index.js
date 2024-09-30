const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
  .connect('mongodb://127.0.0.1:27017/farmStand_V2')
  .then(() => {
    console.log('Mongo Connection Open...');
  })
  .catch((err) => {
    console.log('Oh No, Mongo Connection Error!!!');
    console.log(err);
  });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
  res.send('Woof');
});

app.listen(3000, () => {
  console.log('App is listening at 3000...');
});
