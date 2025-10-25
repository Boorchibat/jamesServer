const { signIn } = require("../auth/signin");
const { signUp } = require("../auth/signup");
const { deleteUser } = require("./deleteUser");
const {updateUser} = require("./updateUser")

module.exports = {
  ...require("./signin"),
  ...require("./signup"),
  ...require("./deleteUser"),
  ...require("./updateUser")
};
