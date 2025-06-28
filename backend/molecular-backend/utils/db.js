const mongoose= require('mongoose');
require('dotenv').config();

const connectDB= async()=>{
    
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
    console.log("🔌 MongoDB connection initialized from moleculer.config.js");
    console.log(`🟢 MongoDB connected: ${conn.connection.name}`);
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
