import express from 'express';
import mainRoutes from './routes/routes.js';
import { engine } from 'express-handlebars';
import passport from 'passport';
import initialize from './utilities/passportConfig.js';
import getUser from './utilities/getUserAdminFunction.js';
const app = express();
export const port = process.env.port || 3000;

// public folder
// app.use(express.static('./public'));
app.use(express.static('public'));

// body parsing //
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// API routing
app.use('/dimashki', mainRoutes);

//express handlebars engin
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//Passport initialazing
initialize(passport, async (usernameInput) => {
  return getUser(usernameInput);
});

export default app;
