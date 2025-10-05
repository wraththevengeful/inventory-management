const {Pool} = require('pg')
require('dotenv').config();

const pool = new Pool({
    connectionString:process.env.DB_URL || 'postgresql://wrath:poorni@localhost:5432/inventorypostgresql://wrath:LtoJcjjMllTefsBtesz0Ctu1vkNL4cXJ@dpg-d3h9b049c44c739olf90-a/inventory_y6a6',
})

module.exports = pool