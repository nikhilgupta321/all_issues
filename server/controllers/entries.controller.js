const Entries = require('../models/entries.models');

// Get all items
const getAllEntries = async (req, res) => {
  try {
    const items = await Entries.findAll();
    res.json(items);
  } catch (err) {
    console.error('Error in getAllItems:', err);
    console.error(err.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific item by ID
const getEntriesById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Entries.findByPk(itemId);
    res.json(item);
  } catch (err) {
    console.error(`Error in getItemById for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add a new item
const addEntries = async (req, res) => {
  const newItem = req.body;
  try {
    const createdItem = await Entries.create(newItem);
    res.json(createdItem);
  } catch (err) {
    console.error('Error in addItem:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update an item
const updateEntries = async (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  try {
    await Entries.update(updatedItem, { where: { id: itemId } });
    res.json({ id: itemId, ...updatedItem });
  } catch (err) {
    console.error(`Error in updateItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an item
const deleteEntries = async (req, res) => {
  const itemId = req.params.id;
  try {
    await Entries.destroy({ where: { id: itemId } });
    res.json({ message: 'Item deleted successfully', id: itemId });
  } catch (err) {
    console.error(`Error in deleteItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllEntries,
  getEntriesById,
  addEntries,
  updateEntries,
  deleteEntries
};




// // const Item = require('../models/itemModel');
// const Item = require('../models/entries.models');

// // Get all items
// const getAllItems = async (req, res) => {
//   try {
//     const items = await Item.findAll();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get a specific item by ID
// const getItemById = async (req, res) => {
//   const itemId = req.params.id;
//   try {
//     const item = await Item.findByPk(itemId);
//     res.json(item);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Add a new item
// const addItem = async (req, res) => {
//   const newItem = req.body;
//   try {
//     const createdItem = await Item.create(newItem);
//     res.json(createdItem);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update an item
// const updateItem = async (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem = req.body;
//   try {
//     await Item.update(updatedItem, { where: { id: itemId } });
//     res.json({ id: itemId, ...updatedItem });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Delete an item
// const deleteItem = async (req, res) => {
//   const itemId = req.params.id;
//   try {
//     await Item.destroy({ where: { id: itemId } });
//     res.json({ message: 'Item deleted successfully', id: itemId });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = {
//   addItem,
//   updateItem,
//   getItemById,
//   deleteItem,
//   getAllItems
// };