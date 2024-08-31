const express = require('express');
const router = express.Router();
const editorsController = require('../controllers/editors.controllers');
const verifyToken = require('../Middleware/user.middleware.js')

// Get all items
router.route('/editors').get(editorsController.getAllEditors)

// Get a specific item by ID
router.get('/editors/:id', editorsController.getEditorsById);

// Add a new item
router.post('/editors', editorsController.addEditors);

// Update an item
router.put('/editors/:id', editorsController.updateEditors);

// Delete an item
router.delete('/editors/:id', editorsController.deleteEditors);

module.exports = router;
