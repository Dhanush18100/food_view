//cretae server
const express=require("express");
require("dotenv").config();
const cookieParser=require("cookie-parser")
const authRoutes=require("../routes/authRoutes")
const foodRoutes=require("../routes/foodRoutes")
const cors=require("cors")
const foodPartnerRoutes=require("../routes/food-partnerRoutes")


const app=express();//server start in server.js

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://food-view-frontend.onrender.com",
    credentials:true,
}))

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api/auth',authRoutes)
app.use('/api/food',foodRoutes)
app.use('/api/food-partner',foodPartnerRoutes)

module.exports=app