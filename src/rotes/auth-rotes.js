const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authMiddleware")

router.post("/register",authController.register);
router.post("/login", authController.login);
router.get('/me', authenticate,authController.getme) 


module.exports = router;