const foodModel=require('../src/models/foodItemModel')
const storageService=require("../services/storageService")
const {v4:uuid}=require("uuid")
const likeModel=require("../src/models/likesModel")
const saveModel = require('../src/models/saveModel')


async function createFood(req,res) {
    
    const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid())

    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id

    })

    res.status(201).json({
        message:"Food created successfully",
        foodItem
    })
    
}

async function getFoodItems(req,res){
    const foodItems=await foodModel.find({})
    res.status(200).json({message:"Food items fetched successfully",foodItems})
}

async function likeFood(req, res) {
    const { foodId } = req.body;
    const user = req.user;

    const isAlreadyLiked = await likeModel.findOne({ user: user._id, food: foodId });

    if (isAlreadyLiked) {
        await likeModel.deleteOne({ user: user._id, food: foodId });

        const updated = await foodModel.findByIdAndUpdate(
            foodId,
            { $inc: { likeCount: -1 } },
            { new: true }
        );

        return res.status(200).json({
            liked: false,
            likeCount: updated.likeCount
        });
    }

    await likeModel.create({ user: user._id, food: foodId });

    const updated = await foodModel.findByIdAndUpdate(
        foodId,
        { $inc: { likeCount: 1 } },
        { new: true }
    );

    res.status(201).json({
        liked: true,
        likeCount: updated.likeCount
    });
}


async function saveFood(req, res) {

    const { foodId } = req.body;
    const user = req.user;

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: -1 }
        })

        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { savesCount: 1 }
    })

    res.status(201).json({
        message: "Food saved successfully",
        save
    })

}

async function getSaveFood(req, res) {

    const user = req.user;

    const savedFoods = await saveModel.find({ user: user._id }).populate('food');

    if (!savedFoods || savedFoods.length === 0) {
        return res.status(404).json({ message: "No saved foods found" });
    }

    res.status(200).json({
        message: "Saved foods retrieved successfully",
        savedFoods
    });

}


module.exports = {
    createFood,
    getFoodItems,
    likeFood,
    saveFood,
    getSaveFood
}