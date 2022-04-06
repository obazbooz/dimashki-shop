import client from '../utilities/db.js';

const renderAdminDelete = (req, res) => {
  client.connect((err) => {
    if (err) throw err;
    const collection = client.db('Dimashki-shop').collection('Products');
    const query = {};
    collection.find(query).toArray((err, results) => {
      if (err) throw err;
      res.render('delete_product', { products: results });
    });
  });
};

export default renderAdminDelete;
