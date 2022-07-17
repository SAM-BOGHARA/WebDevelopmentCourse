const express = require("express");
const app = express();

app.get("/", function (req, res) {
  //   console.log(req);
  res.send("<h1>Shubham!!!</h1>");
});

app.get("/a", function (req, res) {
  res.send("Contact me : shubhamboghara444@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("Hey Everyone, How u doin??");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
