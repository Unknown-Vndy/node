const {
  TODO_CREATION_VALIDATION_SCHEMA
} = require('../utils/validationSchema');

module.exports.validateTodoOnCreate = async (req, res, next) => {
  const { body } = req;
  try {
    const validatedTodo = await TODO_CREATION_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTodo;
    next();
  } catch (error) {
    next(error);
  }
};
