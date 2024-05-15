const express = require("express");
const controller = require("../Controller/TeacherController");
const validate = require("../Middleware/TeacherValidator");
const validator = require("../Middleware/Validator");
const { isAdmin } = require("../Middleware/AuthenticationMW");
const router = express.Router();

router
  .route("/teachers")
  .all(isAdmin)
  .get(controller.getAllTeachers)
  .post(validate.TeacherValidation, validator, controller.addTeacher)
  .put(validate.TeacherValidation, validator, controller.updateTeacher)
  .delete(controller.deleteTeacher);

router.get("/teachers/supervisors", controller.getAllSV);

router.get("/teachers/:id", controller.getOneTeacher);

module.exports = router;
