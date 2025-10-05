const db = require('../db/queries');

async function updateAnItemInDB(req, res) {
    const newItem = {
        name: req.body.itemname,
        id: Number(req.body.itemid),
        description: req.body.itemdescription,
        mrp:Number(req.body.mrp),
        quantity:Number(req.body.quantity),
        vendorid:req.body.vendorid,
        category:req.body.category
    }
    console.log(newItem);   
    await db.updateAnItem(newItem);
    res.redirect(`/details/item/${req.params.itemid}`);
}

module.exports = {
    updateAnItemInDB,
}