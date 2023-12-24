const mongoose = require('mongoose');

// Define a note schema
const noteSchema = mongoose.Schema({
  title: { type: String, required: true},
  body: { type: String, required: true},
  user: { type: String, required: true},

},{
    versionKey:false
})

const NoteModel = mongoose.model('note', noteSchema);

// Export the Note model to use it in other parts of your application
module.exports = {
  NoteModel,
};
