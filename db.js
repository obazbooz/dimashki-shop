import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://shop-admin:T---2249177@cluster0.x4fs6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
export const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const collection = client.db('Dimashki-shop').collection('Products');
  // perform actions on the collection object

  const newProduct = {
    productId: '000',
    productName: 'Shantah',
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

client.close();
