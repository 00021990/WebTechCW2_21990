const express = require('express');
const { recipeValidationRules } = require('../../validators/recipe');
const recipeController = require('../../controllers/recipe');
const router = express.Router();

router.post('/create', recipeValidationRules(), recipeController.create);
router.post('/update/:id', recipeValidationRules(), recipeController.update);
router.get('/delete/:id', recipeValidationRules(), recipeController.delete);

module.exports = router;
