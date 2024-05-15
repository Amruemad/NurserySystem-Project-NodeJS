const express = require("express");
const controller = require("../Controller/ClassController");
const validate = require("../Middleware/ClassValidator");
const validator = require("../Middleware/Validator");
const { isAdmin } = require("../Middleware/AuthenticationMW");
const router = express.Router();

router
  .route("/class")
  .all(isAdmin)
  .get(controller.getAllClasses)
  .post(validate.ClassValidation, validator, controller.addClass)
  .put(validate.ClassValidation, validator, controller.updateClass)
  .delete(controller.deleteClass);

router.get("/class/:id", controller.getOneClass);

router.get("/class/teacher/supervisors", controller.getClassTeachers);

router.get("/class/child/:id", controller.getClassChildren);

module.exports = router;
