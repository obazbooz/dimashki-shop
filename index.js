import express from 'express';
import mainRoutes from './routes/routes.js';
import { engine } from 'express-handlebars';
import multer from 'multer';
import path from 'path';

const app = express();
export const port = process.env.port || 3000;

// body parsing //
app.use(express.json());

// public folder
// app.use(express.static('./public'));
app.use(express.static('public'))

// API routing
app.use('/dimashki', mainRoutes);

//express handlebars engin
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Set storage engin
// const storage = multer.diskStorage({
//   destination: '/public/uploads/',
//   filename: (req, file, cb) => {
//     cb(
//       null,
//       file.filename + '-' + Date.now() + path.extname(file.originalname),
//     );
//   },
// });

// Init upload
// export const upload = multer({
//   storage: storage,
// }).single('myProduct');

export default app;
