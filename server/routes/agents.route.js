const express = require('express');
const router = express.Router();
// const itemController = require('../controllers/itemController');
const itemAgents = require('../controllers/agents.controllers');

// Get all items
// router.route('/items').get(itemController.getAllItems)
router.route('/agents').get(itemAgents.getAllAgents)

// Get a specific item by ID
router.get('/agents/:id', itemAgents.getAgentsById);

// Add a new item
router.post('/agents', itemAgents.addAgents);

// Update an item
router.put('/agents/:id', itemAgents.updateAgents);

// Delete an item
router.delete('/agents/:id', itemAgents.deleteAgents);

module.exports = router;