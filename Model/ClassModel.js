const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  _id: Number,
  name: String,
  supervisorID: { type: Number, ref: "teachers" },
  childrenID: [{ type: Number, ref: "child" }],
});

module.exports = mongoose.model("class", schema);
