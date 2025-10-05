const db = require("../db/queries")

async function getItemDetails(req, res) {
    const rows = await db.getItemDetails(req.params.itemid);
    const vendors = await db.getAllVendors();
    const categories = await db.getAllCategories()
    console.log(rows[0])
    // res.send(rows[0]);
    res.render("viewItem",{item:rows[0], vendors:vendors, categories:categories});
}

module.exports = {
    getItemDetails,
}