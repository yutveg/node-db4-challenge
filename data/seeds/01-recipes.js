exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    {
      recipe_name: "Banana PB Smoothie",
      instructions:
        "Put banana into blender. Put peanut butter into blender. Blend"
    },
    {
      recipe_name: "Hot Water",
      instructions: "Put water into pot. Boil water."
    }
  ]);
};
