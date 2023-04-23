const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const createToken = async ({ id }) => {
  return await jwt.sign({ id }, "secret", {
    expiresIn: "30d",
  });
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Please provide email and password");
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    const shart = await bcrypt.compare(password, user.password);

    if (!shart) {
      throw new Error("Incorrect password");
    }

    const token = await createToken(user);
    res.json({ isOk: true, status: "sucess", token, user });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", isOk: false, message: error.message });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, passwordConfirm } = req.body;
    if (!email || !password || !passwordConfirm || !firstName || !lastName) {
      next(new AppError("You are need enter all fields", 404));
    }

    if (password !== passwordConfirm) {
      next(new AppError("passwords is not the same", 400));
    }

    const user = await User.create({ firstName, email, password, lastName });
    const token = await createToken(user);
    res.json({ isOk: true, status: "sucess", token, user });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", isOk: false, message: error.message });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req?.headers?.authorization?.split(" ")[0] === "Bearer" &&
      req?.headers?.authorization
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else {
      throw new Error("Token not found");
    }
    const decoded = await jwt.verify(token, "secret");

    const user = await User.findOne({ where: { id: decoded.id } });

    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", isOk: false, message: error.message });
  }
};

exports.userSelf = async (req, res, next) => {
  try {
    const id = req.user.id;
    const user = await User.findByPk(id);
    res.status(200).json({ user, isOk: true });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", isOk: false, message: error.message });
  }
};
