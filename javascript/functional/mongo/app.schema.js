const { mongoose } = require("@dolphjs/dolph/packages");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("users", UserSchema);
module.exports = { User };
