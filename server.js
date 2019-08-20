const express = require('express');
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controllers");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("listening on http://localhost:" + PORT);
});