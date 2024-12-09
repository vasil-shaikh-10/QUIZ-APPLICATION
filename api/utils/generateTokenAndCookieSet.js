const cookie = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config({path:"../.env"})

const generateTokenAndCookieSet =async(userid,res)=>{
    try {
        const Token = jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:'15d'})
        res.status(201).cookie("jwt-QuizeApplication",Token,{
        maxAge:15 * 24 * 60 * 60 * 1000, // 15 days in MS
        httpOnly:true,
        sameSite:"strict"
    })
    return Token;
    } catch (error) {
        console.log("Error in generateTokenAndCookieSet Utils", error.message)
        res.status(500).json({success:false,message:"Interna; Server Error"})
    }
}

module.exports = generateTokenAndCookieSet