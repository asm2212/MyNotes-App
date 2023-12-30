const express = require("express");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/UserModel");
const {NoteModel} = require("../models/NoteModel");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

function authenticator(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.send({
      message: "Token is missing. Please log in.",
      status: 2
    });
  }

  jwt.verify(token, async (err, decode) => {
    if (err) {
      return res.send({
        message: "Token is not valid. Please log in.",
        status: 2
      });
    }

    if (decode && decode.userId) {
      req.body.userId = decode.userId;
      next();
    } else {
      res.send({
        message: "Token is not valid. Please log in.",
        status: 2
      });
    }
  });
}

module.exports = {
  authenticator,
};
