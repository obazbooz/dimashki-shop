import { MongoClient, ServerApiVersion } from 'mongodb';

const uri =
  'mongodb+srv://shop-admin:T---2249177@cluster0.x4fs6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

export default client;