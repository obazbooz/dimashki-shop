import client from '../utilities/db.js';

const renderAdminErase = (req, res) => {
  // console.log(`this is erase req ${req.body.productNumber}`);
  client.connect((err) => {
    const collection = client.db('Dimashki-shop').collection('Products');
    // console.log(
    //   `this is erase req inside db connection ${req.body.productNumber}`,
    // );
    // const productNumberTobeDeleted = {
    //   productNumber: req.body.productNumber,
    // };

    // const query = { productNumber: req.body.productNumber };
    // console.log(`product number to be deleted${req.body.productNumber}`);
    // collection.deleteOne(query, (err, res) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log('Product deleted');
    // });
    // console.log(
    //   `this is inside the DB connection for delete ${productNumberTobeDeleted.productNumber}`,
    // );
  });
  // console.log(`this is outside the DB connection ${req.body.productName}`);

  res.render('deleted', {
    msg: 'Product deleted',
  });
};

export default renderAdminErase;
