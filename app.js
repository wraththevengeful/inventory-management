// Imports0
const express = require('express');
const app = express();
require(`dotenv`).config();
const path = require('node:path');

// Routers
const indexRouter = require('./routes/index_routes')

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/',indexRouter);

const PORT = process.env.PORT;
app.listen(PORT,(err)=>{
    if(err) console.error(err);
    console.log(`Listening on PORT:`, PORT);
})