const User = require("../../schema/userSchema");
const bcrypt = require("bcrypt");

const signIn = async (req, res) => {
  const { password, email } = req.body;
  if (!password || !email) {
    res.status(400).json({ message: "Please fill out password and email" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "no User has been created" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status.json({ message: "Invalid Credentaials" });
    }
    return res.status(200).json({
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {signIn};