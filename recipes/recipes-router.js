const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:id/ingredients", (req, res) => {});

router.get("/:id/instructions", (req, res) => {});

module.exports = router;
