const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You Must Provide name"],
    trim: true,
    maxlength: [33, "Maximum twenty characters"],
    minlength: [4, "Minimum four characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
