const express=require('express');

const router=express.Router();

const userContoller=require('../controllers/user_controller');
const productController=require('../controllers/product_controller')
const paymentController=require('../controllers/payment')

router.post('/signup',userContoller.signUp);

router.post('/login',userContoller.login);

router.get('/products',productController.getProducts);

router.get('/product/:id',productController.getProductDetails);

router.post('/payment',paymentController.addPayment);

router.post('/callback',paymentController.sendResponse);

module.exports=router;