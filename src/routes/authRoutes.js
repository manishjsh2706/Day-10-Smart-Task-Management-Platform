const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// Register API
router.post("/register", registerUser);


// ✅ LOGIN API
router.post("/login", loginUser);


module.exports = router;
