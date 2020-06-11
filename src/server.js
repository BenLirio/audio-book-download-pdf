const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("test");
});

app.listen(8080, () => {
  console.log("app on 8080");
});
