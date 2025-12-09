const express=require("express")
const foodController=require("../controllers/foodController")
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router();
const multer=require('multer');

const upload=multer({
    storage:multer.memoryStorage()
})

router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood)
router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItems)
module.exports=router;