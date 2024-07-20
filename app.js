const express = require("express");
const path = require("path");
const app = express();
const urlRouter = require("./routes/router");
const staticRouter = require("./routes/static-router");
const url = require("./models/model");
const { connectToMongoose } = require("./middlewares/mongoose-connect");
const PORT = 3000 || process.env.PORT;

connectToMongoose("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB Connected");
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/url", urlRouter);

app.use("/", staticRouter);

app.listen(PORT, () => console.log("Listening at PORT :", PORT));
