const {storageModel} = require('../models')

const createItem = async (req, res) =>{

  const publicPath = process.env.PUBLIC_URL

  console.log('.................\n', req.file)
  const data = {
    filename: req.file.filename,
    url: `${publicPath}/${req.file.filename}`
  }

  const result = storageModel.create(data)
  res.send(data)
}

const getItems = async (req, res) =>{
  const result = await storageModel.find()
  res.send(result)
}

module.exports = {createItem, getItems}