import client from '../utilities/db.js';

const renderShowProducts = (req, res) => {
  // res.status(200).json('Welcome user');
  client.connect((err) => {
    if (err) throw err;
    const collection = client.db('Dimashki-shop').collection('Products');
    const query = {};
    collection.find(query).toArray((err, results) => {
      if (err) throw err;
      res.render('products', { products: results });
    });
  });
  //res.render('products', {});
};

export default renderShowProducts;
