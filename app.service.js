const { DolphServiceHandler } = require("@dolphjs/main/classes");
const { userModel } = require("./app.model");

//OOP approach
class AppService extends DolphServiceHandler {
  constructor() {
    super("app");
  }

  greeting({ name, email }) {
    return userModel.create({ name, email });
  }
}

// POP approach
const greeting = ({ name, email }) => {
  return userModel.create({ name, email });
};

module.exports = { AppService, greeting };
