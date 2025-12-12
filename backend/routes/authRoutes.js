const express = require("express")
const authController=require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router=express.Router();
//user auth apis
router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser)
router.get('/user/logout',authController.logoutUser)
router.get("/check", authMiddleware.authUserMiddleware, authController.checkLogin);



//food partner auth api

router.post('/food-partner/register',authController.registerFoodPartner)
router.post('/food-partner/login',authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)


module.exports=router;