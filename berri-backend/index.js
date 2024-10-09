const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get("/sahamatiapi/v2/", (req, res) => {
  res.send("Sahamati API v2 is working!");
});

app.post("/sahamatiapi/v2/Consent/Notification", (req, res) => {
  const consentData = req.body;

  // Log or process the consent notification data
  console.log("Received Consent Notification:", consentData);

  // Respond to AA that the request was successfully processed
  res.status(200).json({ message: "Consent notification received" });
});

// POST route for handling FI Notifications
app.post("/sahamatiapi/v2/FI/Notification", (req, res) => {
  const fiData = req.body;

  // Log or process the financial information notification data
  console.log("Received FI Notification:", fiData);

  // Respond to AA that the request was successfully processed
  res.status(200).json({ message: "FI notification received" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
