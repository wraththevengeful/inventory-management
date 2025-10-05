const db = require('../db/queries');

async function deleteAnItem(req,res) {
    const itemID = Number(req.params.itemid);
    console.log(itemID);
    await db.deleteAnItem(itemID);
    res.redirect('/');
}

module.exports = {
    deleteAnItem,
}