const User = require("../model/UsersModel"); // adjust path as needed
const bcrypt = require("bcryptjs"); // if you're using hashed passwords
const jwt = require("jsonwebtoken");

module.exports.Login = async (req, res) => {
  const { username, password } = req.body;

  console.log("Login attempt =>", { username, password });


  try {
    // Check if user exists
    const user = await User.findOne({ username });

    if (!user) {
        console.log("❌ User not found");
      return res.status(401).json({ message: "User not found" });
    }

    console.log("✅ Found user:", user.username);
    console.log("🔐 Stored hash:", user.password);

    console.log("Password received for comparison:", `"${password}"`);
    console.log("Stored hash from DB:", user.password);

    // Compare password (if hashed, use bcrypt)
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Send token as cookie
    res.cookie("token", token, {
      httpOnly: true,
       secure: false,      // false for localhost
       sameSite: "None",
     
    // or "None" if cross-site & secure
       maxAge: 24 * 60 * 60 * 1000,
    // 1 day
    });

    return res.status(200).json({ message: "Login successful" });
    

  } catch (error) {
    console.error("🔥 Login error:", error);

    return res.status(500).json({ message: "Internal Server Error" });
  }
};
