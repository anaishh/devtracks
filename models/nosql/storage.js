const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema(
  {
    filename: String,
    url: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("storage", StorageSchema)