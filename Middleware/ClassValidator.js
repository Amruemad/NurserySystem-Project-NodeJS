const { body } = require("express-validator");

exports.ClassValidation = [
  // body("_id").isMongoId().withMessage("Student ID should be a number"),
  body("name").isString().withMessage("Class name must be a string"),
  body("supervisorID").isInt().withMessage("Teacher ID should be a number"),
  body("childrenSchema").isArray().withMessage("Invalid children IDs format"),
];
