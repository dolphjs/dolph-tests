const { sequelize } = require("@dolphjs/dolph/packages");
const { sequelizeInstance } = require("./sql.config");
const { DataTypes } = sequelize;

const User = sequelizeInstance.define("user", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: DataTypes.INTEGER,
});

module.exports = { User };
