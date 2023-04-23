const sequelize = require("../configs/db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    photo: { type: DataTypes.STRING, defaultValue: "default.jpg" },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { timestamps: true, createdAt: true, updatedAt: false }
);

const bcrypt = require("bcryptjs");
const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, 12);
  return hashPass;
};

User.beforeCreate(async (user, options) => {
  const password = await hashPassword(user.password);
  user.password = password;
});

module.exports = User;
