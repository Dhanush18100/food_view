const express=require("express");
const foodPartnerController = require("../controllers/food-partnerController");
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router()


router.get("/:id",authMiddleware.authUserMiddleware,foodPartnerController.getFoodPartnerById)

module.exports=router;