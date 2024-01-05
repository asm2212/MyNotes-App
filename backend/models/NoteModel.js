const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: String, required: true },
  },
  {
    versionKey: false,
    collection: "notes", 
  }
);

const NoteModel = mongoose.model("Note", noteSchema); 

module.exports = {
  NoteModel,
};
