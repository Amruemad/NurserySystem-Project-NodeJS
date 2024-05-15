const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fullname: String,
  password: String,
  email: String,
  image: String,
});

module.exports = mongoose.model("teachers", schema);
