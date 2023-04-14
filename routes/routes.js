const controller=require('../controller/controller');
const express=require('express');
const router= express.Router();

router.get('/',controller.home);
router.get('/add',controller.add_get);
router.post('/add',controller.add_post);
router.get('/edit/:id',controller.edit_get);
router.post('/edit',controller.edit_post);
router.get('/delete/:id',controller.delete_get);
router.get('/timkiem',controller.timkiem_get);
module.exports=router;