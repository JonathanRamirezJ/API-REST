const express = require("express");
const morgan = require("morgan");
const bodyParse = require("body-parser");
const app = express();

// Setting
app.set('port', process.env.Port || 3000); 

// Middelware
app.use(morgan('dev'));
app.use(bodyParse.json());

// Routes
require('./routes/user-routes')(app);

app.listen(app.get('port'), () => {
    console.log("Server running in port 3000");
});