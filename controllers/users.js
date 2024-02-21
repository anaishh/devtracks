const {usersModel} = require ('../models')

const getItems = async (req, res) => {
  const users1 = await usersModel.find()
  res.send(users1)
}

const createItem = async (req, res) => {
  const {body} = req
  console.log(body)
  usersModel.create(body)
  res.send('ok')
}

module.exports = {getItems, createItem}