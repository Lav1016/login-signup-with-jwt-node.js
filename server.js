const express = require('express');
const bodyParser = require("body-parser");
const app = express();

require('./models/database');
const indexRouter = require('./routes/index');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin',indexRouter);


app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

module.exports = app ;