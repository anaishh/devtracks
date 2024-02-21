const express = require('express')
//const {getItems, getItem} = require('../controllers/tracks.js')

const router = express.Router();

router.get('/', (req, res) => {
 // getItems(req, res);
 res.send("Hello")
})

router.get('/:id', (req, res) => {
  getItem(req, res);
})
module.exports = router;
