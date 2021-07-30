  
const express = require('express')
const router = express.Router()
const dorayakiController = require('../controllers/dorayaki.controller');

// create new dorayaki
// fill request body with dorayaki json
router.post('/', dorayakiController.create);

// get dorayaki
// use query param "id" i.e. localhost:5000/dorayaki?id=1 to get dorayaki by id
// leave blank to get all dorayaki
router.get('/', dorayakiController.get);

// update dorayaki
// fill request body with dorayaki json
router.patch('/', dorayakiController.update);

// delete dorayaki
// use query param "id" i.e. localhost:5000/dorayaki?id=1 to specify deleted dorayaki
router.delete('/', dorayakiController.delete);

module.exports = router;