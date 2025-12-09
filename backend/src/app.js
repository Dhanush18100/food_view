//cretae server
const express=require("express");
require("dotenv").config();
const cookieParser=require("cookie-parser")
const authRoutes=require("../routes/authRoutes")
const foodRoutes=require("../routes/foodRoutes")



const app=express();//server start in server.js

app.use(express.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api/auth',authRoutes)
app.use('/api/auth',foodRoutes)

module.exports=app