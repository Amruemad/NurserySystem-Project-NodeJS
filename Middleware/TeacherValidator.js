const { body } = require("express-validator");

exports.TeacherValidation = [
  //   body("_id").isMongoId().withMessage("Student ID should be a number"),
  body("fullname").isString().withMessage("Full name must be a string"),
  // body("password")
  //   .isStrongPassword()
  //   .optional()
  //   .withMessage("invalid password"),
  body("email")
    .isEmail()
    .optional()
    .withMessage("Please provide a valid email address"),
  body("image").isString().optional().withMessage("Image URL must be a string"),
];
