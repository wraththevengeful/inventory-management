const pool = require('./pool')

async function getAllItemsDB() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategories() {
    const { rows } = await pool.query('SELECT * FROM category');
    return rows;
}

async function getAllVendors() {
    const { rows } = await pool.query('SELECT * FROM vendors');
    return rows;
}

async function addNewItem(item) {
    await pool.query(`INSERT INTO 
        items (name, mrp, description, quantity, category, vendorid, imageurl) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [item.name, Number(item.mrp), item.description, Number(item.quantity), item.category, item.vendorid, item.imageurl]);
}

async function addNewCategory(category){
    await pool.query(`INSERT INTO category (name) VALUES ($1)`, [category.name]);
}

async function addNewVendor(vendor) {
    await pool.query(`INSERT INTO vendors
        (id, name, email, phone) 
        VALUES ($1, $2, $3, $4)`,
        [vendor.id, vendor.name, vendor.email, vendor.phone]
    );
}

async function getItemDetails(itemid) {
    const {rows} = await pool.query(`SELECT it.id AS itemid, it.name AS itemname, it.mrp AS mrp, it.description AS description, it.quantity AS quantity, it.category AS category, it.imageurl AS imageurl, it.vendorid AS vendorid, v.name AS vendorname, v.email AS vendoremail, v.phone AS vendorphone 
        FROM items it JOIN vendors v ON (v.id = it.vendorid)
        WHERE it.id = $1`,
        [itemid]
    );
    return rows;
};

async function updateAnItem(newItem) {
    await pool.query(`UPDATE items SET 
        name = $1, mrp = $2, description = $3, quantity = $4, category = $5, vendorid = $6
        WHERE id = $7`,[newItem.name, newItem.mrp, newItem.description, newItem.quantity, newItem.category, newItem.vendorid, newItem.id]
    );
}

async function deleteAnItem(itemID) {
   await pool.query(`DELETE FROM items WHERE id = $1`,[itemID]); 
}

module.exports = {
    getAllItemsDB,
    getAllCategories,
    getAllVendors,
    addNewItem,
    addNewCategory,
    addNewCategory,
    addNewVendor,
    getItemDetails,
    updateAnItem, 
    deleteAnItem
}