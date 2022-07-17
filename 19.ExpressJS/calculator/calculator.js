const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / height ** 2;
    console.log(bmi);
    res.send(`Your BMI is ${bmi.toFixed(1)}`);
})

app.listen(3000, function () {
  console.log("server started on port 3000");
});
