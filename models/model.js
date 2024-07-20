const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
    },
    vistHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("url", urlSchema);
