exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    {
      ingredient_name: "Banana"
    },
    {
      ingredient_name: "Peanut Butter"
    },
    {
      ingredient_name: "Water"
    }
  ]);
};
