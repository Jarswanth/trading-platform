const { Signup } = require("../Controllers/AuthController");
const { Login } = require("../Controllers/LoginController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;