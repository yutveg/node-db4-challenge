const express = require("express");

const Data = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Data.getRecipes().then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "God help us.." });
  });
});

router.get("/:id/ingredients", (req, res) => {});

router.get("/:id/instructions", (req, res) => {
  Data.getInstructions(req.params.id).then(result => {
    if (result) res.status(200).json(result);
    else res.status(500).json({ error: "God help us.." });
  });
});

module.exports = router;
