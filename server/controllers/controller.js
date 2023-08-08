const express  = require('express');
const DataModel = require('../model/DataModel')
const router = express.Router()

router.get('/', async (req, res) => {
    const filters = req.query;
    try {
      const filteredData = await DataModel.find(filters);
      res.status(200).json(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router