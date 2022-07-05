const yup = require('yup');

module.exports.TODO_CREATION_VALIDATION_SCHEMA = yup.object({
  title: yup
    .string()
    .min(2)
    .max(320)
    .required(),
  body: yup
    .string()
    .min(2)
    .max(640)
    .required()
});
