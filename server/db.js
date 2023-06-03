const mongoose=require('mongoose')


const userSchema = new mongoose.Schema({
    email: String,
    otpverified:String ,
    otp: String,
    key: String

})
 
const userModel = mongoose.model("userCollection", userSchema);

module.exports=userModel;
