const { signIn } = require("../auth/signin");
const { signUp } = require("../auth/signup");

module.exports = {
  ...require("./signin"),
  ...require("./signup"),
};
