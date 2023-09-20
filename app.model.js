const { mongoose } = require("@dolphjs/dolph/packages");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const userModel = mongoose.model("User", userSchema);
module.exports = { userModel };
