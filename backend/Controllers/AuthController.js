const User = require("../model/UsersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username} = req.body;
    console.log("Plain password used at signup:", password);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    };
    console.log("Password received for hashing:", `"${password}"`);


     // 2. Hash the password
 // 10 is salt rounds

    const user = await User.create({username,email, password});
    console.log("✅ New user created:", user); // 2. Confirm user creation
    const token = createSecretToken(user._id);
     console.log("🔐 JWT Token created:", token); // 3. Check token
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
      secure: false,         // true in production (HTTPS)
      sameSite: "lax", 
    });
     console.log("🍪 Cookie set successfully");
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message }); // Also send error to frontend
  }
};