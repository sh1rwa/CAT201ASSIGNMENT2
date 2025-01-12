const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET all cards from cards.json
router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading cards.json:', err);
      return res.status(500).json({ error: 'Failed to read card data' });
    }
    res.json(JSON.parse(data)); // Send JSON data as response
  });
});

// GET card details by slug
router.get('/:slug', (req, res) => {
  const { slug } = req.params;
  const filePath = path.join(__dirname, '../data/cards.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading cards.json:', err);
      return res.status(500).json({ error: 'Failed to read card data' });
    }

    try {
      const cards = JSON.parse(data);

      // Flatten all subcategories to search for the card
      const allCards = Object.values(cards).flat();

      const card = allCards.find((card) => card.slug === slug);
      if (!card) {
        return res.status(404).json({ error: 'Card not found' });
      }
      res.json(card);
    } catch (parseError) {
      console.error('Error parsing cards.json:', parseError);
      return res.status(500).json({ error: 'Failed to parse card data' });
    }
  });
});

// Export the router
module.exports = router;
