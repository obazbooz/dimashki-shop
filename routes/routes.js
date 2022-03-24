import express from 'express';
import multer from 'multer';
import path from 'path';
const router = express.Router();

/*****************************************/
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname),
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
}).single('myProduct');
/**************************/

router.get('/admin', (req, res) => {
  res.status(200);
  res.render('home', { name: 'Tarek' });
});

router.post('/admin/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log('Error');
    } else {
      console.log(req.file.filename);
      res.status(200);
      res.render('uploaded', { file: `./public/uploads/${req.file.filename}` });
    }
  });
});

router.get('/products', (req, res) => {
  res.status(200).json('Welcome user');
});

export default router;
