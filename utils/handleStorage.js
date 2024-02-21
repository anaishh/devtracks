const multer = require('multer')

const storage = multer.diskStorage({
  destination: `${__dirname}/../storage`,   
/*
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`
    cb(null,pathStorage)
  },
  */
  filename: function (req, file, cb) {
    console.log(file)
    const names = file.originalname.split('.')
    const ext = names.pop()
    const name = names.shift()
    const filename = `${name}-${Date.now()}.${ext}`
    cb(null, filename)
  }
  
})

const uploadMiddleware = multer({storage})

module.exports = uploadMiddleware