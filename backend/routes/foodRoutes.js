const express = require("express")
const foodController = require("../controllers/foodController")
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single("video"), foodController.createFood)
router.get('/', authMiddleware.authUserMiddleware, foodController.getFoodItems)


router.post('/like', authMiddleware.authUserMiddleware, foodController.likeFood)

router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.saveFood
)

router.get('/save',
   authMiddleware.authUserMiddleware,foodController.getSaveFood
)

module.exports = router;