const express = require(`express`);
const updateRouter = express.Router();
const updateController = require('../controllers/update_controller')

updateRouter.post('/item/:itemid',updateController.updateAnItemInDB);

module.exports = updateRouter;