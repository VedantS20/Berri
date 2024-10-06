const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/sahamatiapi/v2/", (req, res) => {
  res.send("Sahamati API v2 is working!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
