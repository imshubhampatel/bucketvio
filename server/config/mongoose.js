const mongoose = require('mongoose');
const chalk = require('chalk')
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function (err) {
    if (err) { console.log(err); }
    console.log(chalk.bgRed.white(" Connected To Database Sucessgully  :) "));
});



