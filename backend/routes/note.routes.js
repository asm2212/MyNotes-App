const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");

const noteRouter = express.Router();
noteRouter.use(authenticator);

noteRouter.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decoded = await jwt.verify(token, "asmare");

    const data = await NoteModel.find({ user: decoded.userId });
    res.status(200).send({
      data: data,
      message: "Success",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error retrieving notes",
      status: 0,
      error: error.message,
    });
  }
});

noteRouter.post("/create", async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.status(201).send({
      message: "Note created",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error creating note",
      status: 0,
      error: error.message,
    });
  }
});

noteRouter.patch("/", async (req, res) => {
  const { id } = req.headers;
  try {
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      message: "Note updated",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error updating note",
      status: 0,
      error: error.message,
    });
  }
});

noteRouter.delete("/", async (req, res) => {
  const { id } = req.headers;
  try {
    await NoteModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      message: "Note deleted",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting note",
      status: 0,
      error: error.message,
    });
  }
});

module.exports = {
  noteRouter,
};
