const { DolphServiceHandler } = require("@dolphjs/dolph/classes");
const { User } = require("./app.schema");

class UserService extends DolphServiceHandler {
  User;
  constructor() {
    super("user");
    this.User = User;
  }

  createUser({ name, email, age }) {
    return this.User.create({ name, email, age });
  }
}

module.exports = { UserService };
