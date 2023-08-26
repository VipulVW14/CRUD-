const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// Add a new entry
router.post('/entries', async (req, res) => {
  try {
    const { name, phoneNumber, email, hobbies } = req.body;
    const newEntry = new Entry({ name, phoneNumber, email, hobbies });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all entries
router.get('/entries', async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
