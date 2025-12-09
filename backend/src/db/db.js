const mongoose = require("mongoose");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1) //exit with failure
    }

}
module.exports = connectDB;