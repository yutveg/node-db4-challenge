exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: "One whole"
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: "Half a cup"
    },
    {
      recipe_id: 2,
      ingredient_id: 3,
      quantity: "One Cup"
    }
  ]);
};
