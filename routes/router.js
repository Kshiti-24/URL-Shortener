const express = require("express");

const router = express.Router();
const {
  handleGeneratedShortUrl,
  handleGetAnalytics,
  handleGetById,
} = require("../controllers/controller");

router.post("/", handleGeneratedShortUrl);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/:shortId", handleGetById);

module.exports = router;
