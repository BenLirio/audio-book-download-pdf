const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer({ dest: "uploads/" });
const net = require("net");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/public/index.html");
});

app.post("/profile", upload.single("avatar"), (req, res, next) => {
  console.log("file: ", req.file && req.file.originalname);

  const socket = new net.Socket({ writable: true });
  const options = {
    port: 8080,
    host: "pdf-to-text",
  };
  socket.connect(options);
  socket.on("connect", () => {
    console.log("connected to server!");
    socket.write("from download-pdf", "utf-8", (err) => {
      console.log("write to server");
      res.sendfile(__dirname + "/public/uploaded.html");
    });
  });
});

app.listen(8080, () => {
  console.log("app on 8080");
});
