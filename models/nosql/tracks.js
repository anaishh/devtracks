const mongoose = require('mongoose')

const TrackSchema = new mongoose.Schema(
  {
    name: String,
    cover:String,
    artist: {
      name: String,
      nickname: String,
      nationality: String
    },
    duration: {
      start: Number,
      end: Number
    },
    mediaId: mongoose.Types.ObjectId
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model("track", TrackSchema)