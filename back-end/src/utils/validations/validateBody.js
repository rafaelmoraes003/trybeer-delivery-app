const { CustomError } = require('../CustomError');

const validateBody = (obj, joiSchema) => {
  const { error } = joiSchema.validate(obj);
  if (error) {
    const errorMessage = error.details[0].message;
    throw new CustomError(errorMessage, 400);
  }
};

module.exports = { validateBody };