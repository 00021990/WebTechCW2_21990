const { validationResult } = require('express-validator');
const recipeService = require('../services/recipe');

const recipeController = {

  getById: (req, res) => {
    try {
      const recipe = recipeService.getById(req, res);
      res.render('recipe/create_update', { recipe })
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAll: (req, res) => {
    try {
        const recipes = recipeService.get(req, res);
        res.render('recipe/index', { recipes })
        console.log(recipes)
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    create: async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('recipe/create_update', { errors: errors.array(), recipe: req.body });
      }
      try {
        await recipeService.insert(req, res);
        res.redirect('/recipe');
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    update: async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render('recipe/create_update', { errors: errors.array(), recipe: req.body });
      }
      try {
        const updatedrecipe = recipeService.update(req, res);
        if (!updatedrecipe) {
          return res.status(404).json({ error: 'recipe not found' });
        }
        res.redirect('/recipe');
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
  
    delete: (req, res) => {
      try {
        const deleted = recipeService.delete(req, res);
        if (!deleted) {
          return res.status(404).json({ error: 'recipe not found' });
        }
        res.redirect('/recipe');
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  };

  module.exports = recipeController;  