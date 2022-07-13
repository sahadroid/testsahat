const express = require("express");
const bodyParser = require('body-parser'); 

const app = express();


app.use(bodyParser.json());

 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to sahat test." });
});


require("./app/routes/route")(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



















