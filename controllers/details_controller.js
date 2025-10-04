const db = require("../db/queries")

async function getItemDetails(req, res) {
    const rows = await db.getItemDetails(req.params.itemid);
    // res.send(rows[0]);
    res.render("viewItem",{item:rows[0]});
}

module.exports = {
    getItemDetails,
}