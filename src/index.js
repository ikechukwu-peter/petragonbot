const express = require("express");
const dotenv = require("dotenv").config();
const initWebRoutes = require("./routes/web");

let app = express();

//config body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init web app
initWebRoutes(app);

//start listening

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Listening for request on port :" + port);
});
