const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  console.log("🧪 Token from cookie:", req.cookies.token);
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;  // Add userId to request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyUser;
