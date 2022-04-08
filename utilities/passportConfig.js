import LocalStrategy from 'passport-local';
// import getUser from "./getUserAdminFunction.js";

const Strategy = LocalStrategy.Strategy;

// function initialize(passport, getUser) {
//   const authenticateUser = (username, password, done) => {
//     const user = getUser(username);
//     if (user == null) {
//       return done(null, false, { message: 'No admin with this username' });
//     }
//     if (password == user.password) {
//       return done(null, user);
//     } else {
//       return done(null, false, { msg: 'Password is incorrect!' });
//     }
//   };

//   passport.use(
//     new LocalStrategy({ usernameField: 'username' }),
//     authenticateUser,
//   );
//   passport.serializeUser((user, done) => {});
//   passport.deserializeUser((id, done) => {});
// }

async function initialize(passport, getUser) {
  getUser('TLadmin').then((result) => {
    console.log(`this is the final result  ${result}`);
  });
}

export default initialize;
