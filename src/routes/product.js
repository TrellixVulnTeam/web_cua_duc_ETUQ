const express=require('express');
const router=express.Router();

const productController=require('../app/controllers/ProductController');


router.get('/create',productController.create);
router.get('/:id/edit',productController.edit);
router.get('/:slug',productController.show);
router.get('/',productController.index);
router.post('/store',productController.store);
router.put('/:id',productController.update);



module.exports=router;
