const { body } = require("express-validator");

exports.ChildValidation = [
  body("id").isInt().withMessage("Student ID should be a number"),
  body("fullname").isString().withMessage("Full name must be a string"),
  body("age").isInt().withMessage("Age should be an integer"),
  body("level")
    .isIn(["PreKG", "KG1", "KG2"])
    .withMessage("Level should be either PreKG, KG1 or KG2"),
  body("address.city").isString().withMessage("City should be a string"),
  body("address.street").isString().withMessage("Street should be a string"),
  body("address.building").isInt().withMessage("Building should be an integer"),
];
