const express = require("express");
const router = express.Router();
const {
  register,
  login,
  protectedData,
  verifyEmail,
  findall,
  deleteuser,
  deleteall,
} = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth");

router.post("/register", register);
router.get("/verify/:token", verifyEmail);
router.post("/login", login);
router.get("/protected", protect, protectedData);
router.get("/users", findall);
router.get("/users/:id", deleteuser);
router.get("/users/delete/all/users/sarvesh/admin", deleteall);

module.exports = router;
