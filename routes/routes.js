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
      console.log(req.file.filename);
      res.status(200);

      client.connect((err) => {
        const collection = client.db('Dimashki-shop').collection('Products');
        // perform actions on the collection object

        const newProduct = {
          productId: '000',
          productName: req.file.filename,
          productDesc: 'Woman handbag high quality',
          productPrice: 50,
        };

        collection.insertOne(newProduct, (err, res) => {
          if (err) {
            throw err;
          }
          console.log(`Document added!`);
        });
      });

      // client.close();

      res.render('uploaded', {
        msg: 'Product uploaded',
        product: `uploads/${req.file.filename}`,
      });
    }
  });
});

router.get('/products', (req, res) => {
  // res.status(200).json('Welcome user');
  res.render('products', {});
});

export default router;
