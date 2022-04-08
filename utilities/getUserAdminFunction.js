import client from '../utilities/db.js';

const getUser = (usernameInput) => {
  client.connect(async (err) => {
    if (err) throw err;
    const collection = client.db('Dimashki-shop').collection('accounts');
    try {
      let user = await collection.findOne({ username: usernameInput });
      console.log(user);
      return user;
    } catch (e) {
      console.log(e);
    }
  });
};

export default getUser;
