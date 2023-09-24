import { sequelizeInstance } from "./db.config";
import { DataTypes } from "sequelize";

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

export { User };
