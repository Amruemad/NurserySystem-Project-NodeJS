const express = require("express");
const controller = require("../Controller/ChildController");
const validate = require("../Middleware/ChildValidator");
const validator = require("../Middleware/Validator");
const { isAdmin } = require("../Middleware/AuthenticationMW");
const router = express.Router();

router
  .route("/child")
  .all(isAdmin)
  .get(controller.getAllChildren)
  .post(validate.ChildValidation, validator, controller.addChild)
  .delete(validate.ChildValidation, validator, controller.deleteChild)
  .put(controller.updateChild);

router.get("/child/:id", controller.getOneChild);

module.exports = router;
