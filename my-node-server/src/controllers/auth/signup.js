const validator = require("validator");
const User = require("../../schema/userSchema");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils");

const signUp = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res
      .status(400)
      .json({ message: "Please enter your username, password and email" });
  }
  if (!validator.isEmail(email)) {
    res.status(400).json({ message: "Please enter a valid email" });
  }
  if (!validator.isStrongPassword(password)) {
    res.status(400).json({
      message:
        "Password must be at least 8 characters and contain at least 1 uppercase letter, 1 lowercase letter, 1 number and at least 1 special character",
    });
  }
  try {
    const user = await User.findOne({email});
    if (user) {
     return res.status(400).json({ message: "This email is already being used" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      createdAt: new Date(),
      username,
      password: hashpassword,
      email,
    });
    const token = createToken(newUser._id);
    return res.status(201).json({
      user: {
        email: newUser.email,
        username: newUser.username,
      },
      token,
    });
  } catch (error) {
     console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { signUp };
