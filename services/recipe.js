const fs = require('fs');
const path = require('path');

if (!global.mock_db) {
  global.mock_db = path.join(__dirname, '../data', 'mock_db.json');
}

const recipes = require(global.mock_db);

const recipeService = {
  // get all recipes
  get(req, res) {
    return recipes;
  },

  // get a recipe by ID
  getById(req, res) {
    const id = req.params.id;
    return recipes.find(item => item.id === id);
  },

  // insert a new recipe
  insert(req, res) {
    let new_id = genRandId(4);
    const body = req.body;
    const recipe = {
      name: body.name,
      description: body.description,
      recipieauthor: body.recipieauthor
    };

    recipes.push({
      id: new_id,
      recipe: recipe
    });
    writeToFile(recipes);
    
    return {
      id: new_id,
      recipe: recipe
    };
  },

  // update an existing recipe
  update(req, res) {
    const id = req.params.id;
    const index = recipes.findIndex(item => item.id === id);
    if (index === -1) {
      return null; // or you could throw an error
    }
    // update the recipe data
    recipes[index].recipe = {
      name: req.body.name,
      description: req.body.description,
      recipieauthor: req.body.recipieauthor
    };
    writeToFile(recipes);
    return recipes[index];
  },

  // delete a recipe
  delete(req, res) {
    const id = req.params.id;
    const index = recipes.findIndex(item => item.id === id);
    if (index === -1) {
      return false; // or you could throw an error
    }
    recipes.splice(index, 1);
    writeToFile(recipes);
    return true;
  }
};

// function for overwriting the json file with updated recipe data
let writeToFile = async (recipes) => {
  await fs.writeFileSync(
    global.mock_db,
    JSON.stringify(recipes, null, 4),
    'utf8'
  );
};

// generate a random id (similar to a simplified UUID)
let genRandId = (count) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < count; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = recipeService;
