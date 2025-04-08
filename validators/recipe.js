const { body } = require('express-validator');

const recipeValidationRules = () => { 
  return [
    body('name')
      .notEmpty().withMessage('Name must not be empty'),
    body('description')
      .notEmpty().withMessage('Desicripti must not be empty'),
    body('recipieauthor')
      .notEmpty().withMessage('Recipie Author must not be empty')
  ];
};

module.exports = {
  recipeValidationRules
};
