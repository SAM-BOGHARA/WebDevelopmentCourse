// caf76e11860e873af94cb905299262a2
const express = require("express");
const https = require("https");

const app = express();

// app.get('/', (req, res) => {
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=caf76e11860e873af94cb905299262a2"
//     https.get(url,function(response){
//         console.log(response.statusCode);

//         response.on('data', function(data){
//             const whetherData = JSON.parse(data);
//             const temp = whetherData.main.temp
//             const description = whetherData.weather[0].description;
//             const icon = whetherData.weather[0].icon;
//             console.log(icon)
//             const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
//             res.write("<p><h1>Weather Data</h1></p>");
//             res.write(`<h2>The temperature in Mumbai is: ${temp} and weather description is ${description}.</h2>`);
//             res.write("<img src="+imageUrl+">")
//             res.send()
//         })
//     })
// })

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log("server is running on 3000");
});
