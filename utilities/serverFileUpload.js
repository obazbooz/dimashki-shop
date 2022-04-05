import multer from 'multer';
import path from 'path';

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

export default upload;