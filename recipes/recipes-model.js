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
    .select("*")
    .where("recipe_id", id);
}

function getInstructions(id) {
  return db("recipes")
    .select("*")
    .where({ id })
    .then(res => {
      console.log(res);
    });
}
