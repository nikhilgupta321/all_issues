const express = require('express');
const router = express.Router();
// const itemController = require('../controllers/itemController');
const itemCountry = require('../controllers/country.controller');

// Get all items
// router.route('/items').get(itemController.getAllItems)
router.route('/country').get(itemCountry.getAllCountry)

// Get a specific item by ID
router.get('/country/:id', itemCountry.getCountryById);

// Add a new item
router.post('/country', itemCountry.addCountry);

// Update an item
router.put('/country/:id', itemCountry.updateCountry);

// Delete an item
router.delete('/country/:id', itemCountry.deleteCountry);

module.exports = router;
