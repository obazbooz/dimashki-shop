import client from '../utilities/db.js';

const renderAdminErase = (req, res) => {
  client.connect((err) => {
    const collection = client.db('Dimashki-shop').collection('Products');
    const query = { productId: req.body.productId };
    collection.deleteOne(query, (err, res) => {
      if (err) {
        throw err;
      }
      console.log('Product deleted');
    });
  });
  res.render('deleted', {
    msg: 'Product deleted',
  });
};

export default renderAdminErase;
