// Imports0
const express = require('express');
const app = express();
require(`dotenv`).config();
const path = require('node:path');

app.use(express.urlencoded({ extended: true }));

// Routers
const indexRouter = require('./routes/index_routes');
const addRouter = require('./routes/add_routes');
const detailsRouter = require('./routes/details_routes');

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/',indexRouter);
app.use('/add', addRouter);
app.use('/details/',detailsRouter);

const PORT = process.env.PORT;
app.listen(PORT,(err)=>{
    if(err) console.error(err);
    console.log(`Listening on PORT:`, PORT);
})