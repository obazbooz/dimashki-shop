import express from 'express';
import multer from 'multer';
import path from 'path';
import { client } from '../db.js';
const router = express.Router();

/*****************************************/
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
}).single('myProduct');
/**************************/

router.get('/admin', (req, res) => {
  res.status(200);
  res.render('home', { name: 'Tarek' });
});

router.post('/admin/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('Error');
    } else {
      // console.log(req.file.filename);
      if (req.file == undefined) {
        console.log(`file undefined`);
        res.render('home', { name: 'Tarek' });
      } else {
        console.log(req.body.productDesc);
        res.status(200);

        client.connect((err) => {
          const collection = client.db('Dimashki-shop').collection('Products');
          // perform actions on the collection object

          const newProduct = {
            productNumber: req.body.productNumber,
            productName: req.file.filename,
            productDesc: req.body.productDesc,
            productPrice: req.body.productPrice,
          };

          collection.insertOne(newProduct, (err, res) => {
            if (err) {
              throw err;
            }
            console.log('Product added');
          });
        });

        // client.close();

        res.render('uploaded', {
          msg: 'Product uploaded',
          product: `uploads/${req.file.filename}`,
        });
      }
    }
  });
});

router.get('/products', (req, res) => {
  // res.status(200).json('Welcome user');
  client.connect((err) => {
    if (err) throw err;
    const collection = client.db('Dimashki-shop').collection('Products');
    const query = {};
    collection.find(query).toArray((err, results) => {
      if (err) throw err;
      console.log(results);
      res.render('products', { products: results });
    });
  });
  //res.render('products', {});
});

export default router;
