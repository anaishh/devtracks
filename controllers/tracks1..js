

const getItems = (req, res) =>{
  const data = ["hello", "world"]
  res.send(data)
}


const getItem = (req, res) =>{
  const data = ["hello"]
  data.push(req.params.id)
  res.send(data)
}
const createItem = (req, res) =>{}
const updateItem = (req, res) =>{}


module.exports = {getItems, getItem, updateItem, createItem}