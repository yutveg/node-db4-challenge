const db = require("../data/dbconfig");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes").select("*");
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .select("*")
    .where("recipe_ingredients.recipe_id", id);
}

// select ingredients.ingredient_name, recipe_ingredients.quantity
// from recipe_ingredients
// join recipes on recipes.id = recipe_ingredients.recipe_id
// join ingredients on ingredients.id = recipe_ingredients.ingredient_id
// where recipes.id = 1

function getInstructions(id) {
  return db("recipes")
    .select("recipes.instructions")
    .where({ id });
}
