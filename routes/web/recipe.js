const express = require('express');
const recipeController = require('../../controllers/recipe');
const router = express.Router();

router.get('/', (req, res)=>{
    recipeController.getAll(req, res)
});

router.get('/create', (req, res)=>{
    res.render('recipe/create_update')
});

router.get('/update/:id', (req, res)=>{
    recipeController.getById(req, res)
});

module.exports = router;
