const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
  building: Number,
});

const schema = new mongoose.Schema({
  _id: Number,
  fullname: String,
  age: Number,
  level: String,
  address: addressSchema,
});

// const schema = new mongoose.Schema({
//   _id: Number,
//   fullname: String,
//   age: Number,
//   level: String,
//   address: Array,
// });

module.exports = mongoose.model("child", schema);
