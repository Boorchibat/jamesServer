const express = require("express")
const { signUp, signIn, deleteUser, updateUser} = require("../controllers/auth")
const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.delete("/delete", deleteUser);
router.put("/update", updateUser)

module.exports = router