import client from '../utilities/db.js';
import upload from '../utilities/serverFileUpload.js';

/***************** */
const renderAdminUpload = (req, res) => {
  upload(req, res, (err) => {
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
            // console.log('Product added');
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
