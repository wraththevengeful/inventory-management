const pool = require('./pool')

async function getAllItemsDB() {
    const {rows} = await pool.query("SELECT * FROM items");
    return rows;
}

module.exports = {
    getAllItemsDB,
}