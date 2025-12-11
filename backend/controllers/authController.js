const userModel = require("../src/models/userModel");
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const foodPartnerModel = require("../src/models/foodpartnerModel")

async function registerUser(req,res) {
    const{fullname,email,password}=req.body;

    const isUserAlreadyExist=await userModel.findOne({email})


    if(isUserAlreadyExist){
        return res.status(400).json({message:"User allready Exists"})
    }

    const hashedPassword=await bcrypt.hash(password,10);

    const user=await userModel.create({
        fullname,email,password:hashedPassword
    })

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({message:"User registered successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname
        }
    })

    
}

async function loginUser(req,res) {
    const{email,password}=req.body;

    const user=await userModel.findOne({email})

    if(!user){
       return res.status(400).json({message:"Invalid email or password"})
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

    res.cookie("token",token);
    res.status(200).json({message:"User logged in successfully",
        user:{
            _id:user._id,
            email:user.email,
            fullname:user.fullname
        }
    })
    
}

async function logoutUser(req,res) {
    res.clearCookie("token");
    res.status(200).json({message:"User logged out successfully"})
    
}


async function registerFoodPartner(req,res) {
    const {name,email,password,phone,address,contactName}=req.body;

    const isAccountAllreadyExists=await foodPartnerModel.findOne({email})

    if(isAccountAllreadyExists){
        return res.status(400).json({message:"Food Partner account already exists"})
    }

    const hashedPassword=await bcrypt.hash(password,10);
    const foodPartner=await foodPartnerModel.create({
        name,email,password:hashedPassword,phone,address,contactName
    })
    
    const token = jwt.sign({id:foodPartner._id},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"Food Partner registered successfully",
        foodPartner:{
            _id:foodPartner._id,
            email:foodPartner.email,
            name:foodPartner.name,
            address:foodPartner.address,
            contactName:foodPartner.contactName,
            phone:foodPartner.phone
            
        }
    })

}

async function loginFoodPartner(req,res) {
    const{email,password}=req.body;
    const foodPartner=await foodPartnerModel.findOne({email});

    if(!foodPartner){
        return res.status(400).json({message:"Invalid email or password"})
    }

    const isPasswordValid=await bcrypt.compare(password,foodPartner.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }
     const token = jwt.sign({id:foodPartner._id},process.env.JWT_SECRET)

    res.cookie("token",token);
    res.status(200).json({message:"FoodPartner logged in successfully",
        foodPartner:{
            _id:foodPartner._id,
            email:foodPartner.email,
            fullname:foodPartner.fullname
        }
    })
    
}

async function logoutFoodPartner(req,res) {
    res.clearCookie("token")
    res.status(200).json({
        message:"Food partner logged out successfully"
    });
    
}





module.exports={registerUser,loginUser,logoutUser,registerFoodPartner,loginFoodPartner,logoutFoodPartner}