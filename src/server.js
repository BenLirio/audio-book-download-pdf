const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/public/index.html");
});

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  console.log("file: ", req.file && req.file.originalname);
  res.sendfile(__dirname + "/public/uploaded.html");
});

app.listen(8080, () => {
  console.log("app on 8080");
});
