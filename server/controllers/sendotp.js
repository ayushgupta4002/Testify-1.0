mongoose.connect("mongodb+srv://Ayush:<>@cluster0.fohsg.mongodb.net/Testify", { useNewUrlParser: true });
const userSchema = {
    email: String , 
    otpverified: Boolean,
    otp:String,
    key:String
};
const userModel = mongoose.model("userCollection", userSchema);

export const getUserByEmail = (myemail) => UserModel.findOne({ email: myemail });