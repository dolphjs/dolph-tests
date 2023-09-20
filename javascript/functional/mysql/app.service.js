const { User } = require("./app.schema");

const createUserService = async ({ name, email, age }) => {
  return User.create({ name, email, age });
};

module.exports = { createUserService };
