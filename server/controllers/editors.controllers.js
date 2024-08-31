const Editors = require('../models/editors.models');

// Get all items
const getAllEditors = async (req, res) => {
  try {
    const items = await Editors.findAll();
    res.json(items);
  } catch (err) {
    console.error('Error in getAllItems:', err);
    console.error(err.stack);  // Log the stack trace
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
// Get a specific item by ID
const getEditorsById = async (req, res) => {
  const itemId = req.params.id;
  try {
    const item = await Editors.findByPk(itemId);
    res.json(item);
  } catch (err) {
    console.error(`Error in getItemById for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// // Add a new item
// Add a new item
const addEditors = async (req, res) => {
  const newItem = req.body;
  try {
    const createdItem = await Editors.create(newItem);
    res.json(createdItem);
  } catch (err) {
    console.error('Error in addItem:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const addEditors = async (req, res) => {
//   const newItem = req.body;
//   try {
//     const createdItem = await Editors.create(newItem);
//     res.json(createdItem);
//   } catch (err) {
//     console.error('Error in addItem:', err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// Update an item
const updateEditors = async (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;

  try {
    await Editors.update(updatedItem, { where: { id: itemId } });
    const updatedEditor = await Editors.findByPk(itemId);
    res.json(updatedEditor);
  } catch (err) {
    console.error(`Error in updateItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// const updateEditors = async (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem = req.body;
//   try {
//     await Editors.update(updatedItem, { where: { id: itemId } });
//     res.json({ id: itemId, ...updatedItem });
//   } catch (err) {
//     console.error(`Error in updateItem for ID ${itemId}:`, err);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// Delete an item
const deleteEditors = async (req, res) => {
  const itemId = req.params.id;
  try {
    await Editors.destroy({ where: { id: itemId } });
    res.json({ message: 'Item deleted successfully', id: itemId });
  } catch (err) {
    console.error(`Error in deleteItem for ID ${itemId}:`, err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllEditors,
  getEditorsById,
  addEditors,
  updateEditors,
  deleteEditors,
};
