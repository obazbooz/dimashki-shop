import express from 'express';
import renderAdminControlPanel from '../controllers/adminControlPanel.js';
import renderAdminAdd from '../controllers/adminAdd.js';
import renderAdminDelete from '../controllers/adminDelete.js';
import renderAdminUpload from '../controllers/adminUpload.js';
import renderAdminErase from '../controllers/adminErase.js';
import renderShowProducts from '../controllers/showProducts.js';

const router = express.Router();

router.get('/admin', renderAdminControlPanel);

router.post('/admin/add', renderAdminAdd);

router.post('/admin/delete', renderAdminDelete);

router.post('/admin/upload', renderAdminUpload);

router.post('/admin/erase', renderAdminErase);

router.get('/products', renderShowProducts);

export default router;
