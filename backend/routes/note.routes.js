const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticator } = require("../middlewares/authenticator");
const { NoteModel } = require("../models/NoteModel");

const noteRouter = express.Router();

// Apply authenticator middleware to all routes
noteRouter.use(authenticator);

// GET route to fetch notes
noteRouter.get("/", async (req, res) => {
  try {
    const { userId } = req.body;
    const data = await NoteModel.find({ user: userId });
    res.send({
      data: data,
      message: "Success",
      status: 1,
    });
  } catch (error) {
    res.status(500).send({
      message: "Error fetching notes",
      status: 0,
      error: error.message,
    });
  }
});

// POST route to create a new note
noteRouter.post("/create", async (req, res) => {
  try {
    const { title, body } = req.body;
    const userId = req.body.userId; // Assuming you're passing userId in the request body

    const note = new NoteModel({ title, body, user: userId });
    await note.save();

    res.send({
      message: "Note Created",
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

// PATCH route to update a note
noteRouter.patch("/", async (req, res) => {
  try {
    const { id } = req.body;
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);

    res.send({
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

// DELETE route to delete a note
noteRouter.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    await NoteModel.findByIdAndDelete({ _id: id });

    res.send({
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
