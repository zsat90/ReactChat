const express = require("express");
const { registerUser } = require("../controller/userController");

const router = express.Router();

router.post("/register", registerUser);
// Add login user route

module.exports = router;
