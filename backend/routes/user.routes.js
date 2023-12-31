const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

userRouter.get("/", (req, res) => {
  res.send("All the user");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 5, async function (error, hash) {
    if (error) return res.send({ message: "something went wrong ", status: 0 });
    try {
      let user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send({
        message: "user created",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

userRouter.get("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.send({
        message: "User does not exist",
        status: 0,
      });
    }

    bcrypt.compare(password, user.password, function (error, result) {
      if (error) {
        return res.send({
          message: "something went wrong" + error,
          status: 0,
        });
      }
      if (result) {
        const token = jwt.sign({ userId: user._id },"asmare" ,{
          expiresIn: "80min", 
        });

        res.send({
          message: "Login successful",
          token: token,
          status: 1,
        });
      } else {
        res.send({
          message: "Invalid Password",
          status: 0,
        });
      }
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

module.exports = { userRouter };
