import client from '../utilities/db.js';
import upload from '../utilities/serverFileUpload.js';

const renderAdminUpload = (req, res) => {
  console.log(`this is outside the update${req.body.productDesc}`);
  upload(req, res, (err) => {
    console.log(`this is inside the update ${req.body.productDesc}`);
    if (err) {
      console.log('Error');
    } else {
      if (req.file == undefined) {
        console.log(`file undefined`);
        res.render('home', {});
      } else {
        res.status(200);
        client.connect((err) => {
          const collection = client.db('Dimashki-shop').collection('Products');
          // perform actions on the collection object
          const uniqId = 'TL' + new Date().getTime();
          const newProduct = {
            productId: uniqId,
            productTitle: req.body.productTitle,
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
};

export default renderAdminUpload;
