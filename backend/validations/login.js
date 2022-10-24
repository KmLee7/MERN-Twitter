const { check } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validationLoginInput = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Email is invalid"),
  check("passowrd")
    .exists({ checkFalsy: true })
    .isLength({ min: 6, max: 30 })
    .withMessage("Password must be between 6 and 30 characters"),
  handleValidationErrors,
];

module.exports = validationLoginInput;
