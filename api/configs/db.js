const mongoose = require('mongoose')
require('dotenv').config({path:'../.env'})

const Database = async()=>{
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connect...");
}

module.exports = Database