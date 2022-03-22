import express from 'express';
const router = express.Router();

router.get('/admin', (req, res) => {
  res.status(200).json('Welcome Admin');
});

router.get('/products', (req, res) => {
  res.status(200).json('Welcome user');
});

export default router;
