const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
  .connect('mongodb://127.0.0.1:27017/farmStand_V2')
  .then(() => {
    console.log('Seeder Mongo Connection Open...');
  })
  .catch((err) => {
    console.log('Oh No, Seeder Mongo Connection Error!!!');
    console.log(err);
  });

const seedProducts = [
  { name: 'Fairy Eggplant', price: 1.0, category: 'vegetable' },
  { name: 'Organic Goddess Melon', price: 4.99, category: 'fruit' },
  { name: 'Organic Mini Seedless Watermelon', price: 3.99, category: 'fruit' },
  { name: 'Organic Celery', price: 1.5, category: 'vegetable' },
  { name: 'Chocolate Whole Milk', price: 2.69, category: 'dairy' },
];

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => console.log(e));

// const product = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });

// product
//   .save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
