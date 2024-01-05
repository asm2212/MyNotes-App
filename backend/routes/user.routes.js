const express = require("express");
const { UserModel } = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("All the users");
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const hash = await bcrypt.hash(password, 5);
    const user = new UserModel({ name, email, password: hash });
    await user.save();
    
    res.status(200).send({
      message: "User created",
      status: 200,
    });
  } catch (error) {
    res.status(500).send({
      message: "Failed to create user",
      status: 0,
      error: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      const result = await bcrypt.compare(password, user.password);

      if (result) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).send({
          message: "User logged in successfully",
          token: token,
          status: 1,
        });
      } else {
        res.status(401).send({
          message: "Incorrect password",
          status: 0,
        });
      }
    } else {
      res.status(404).send({
        message: "User does not exist",
        status: 0,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Error during login",
      status: 0,
      error: error.message,
    });
  }
});

module.exports = { userRouter };
