const db = require('../db/queries')

async function getIndexAllItems(req,res) {
    const rows = await db.getAllItemsDB();
    console.log(rows);
    res.render("index",{items:rows});
}

module.exports = {
    getIndexAllItems,
}