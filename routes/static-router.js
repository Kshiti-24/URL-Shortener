const express = require("express");
const URL = require("../models/model");

const router = express.Router();

router.get("/", async (req, res) => {
  const allurl = await URL.find({});
  return res.render("index", {
    urls: allurl,
  });
});

module.exports = router;
