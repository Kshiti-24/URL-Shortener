const shortid = require("shortid");
const URL = require("../models/model");

async function handleGeneratedShortUrl(req, res) {
  const shortID = shortid();
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "url is required" });

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    vistHistory: [],
  });
  return res.render("index", { id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClick: result.vistHistory.length,
    analytics: result.vistHistory,
  });
}

async function handleGetById(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        vistHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );

  return res.redirect(entry.redirectURL);
}

module.exports = {
  handleGeneratedShortUrl,
  handleGetAnalytics,
  handleGetById,
};
