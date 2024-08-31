const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries.controller');

// Get all items
router.route('/entries').get(entriesController.getAllEntries)

// Get a specific item by ID
router.get('/entries/:id', entriesController.getEntriesById);

// Add a new item
router.post('/entries', entriesController.addEntries);

// Update an item
router.put('/entries/:id', entriesController.updateEntries);

// Delete an item
router.delete('/entries/:id', entriesController.deleteEntries);

module.exports = router;
