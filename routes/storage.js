const express = require('express')
const uploadMiddleware = require('../utils/handleStorage')
const {createItem, getItems} = require('../controllers/storage')

const router = express.Router()

/*
router.post('/', uploadMiddleware.single("myfile"), (req, res) => {
  console.log(req.file)
  res.send('llego')
})
*/

router.post('/', uploadMiddleware.single("myfile"), createItem)
router.get('/', getItems)

module.exports = router