const express = require(`express`);
const deleteRouter = express.Router();
const deleteController = require('../controllers/delete_controller')

deleteRouter.post('/item/:itemid', deleteController.deleteAnItem);

module.exports = deleteRouter;