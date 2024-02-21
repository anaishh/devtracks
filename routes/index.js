const fs = require('fs');
const express = require('express')
const router = express.Router();

//const PATH_ROUTES = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

const files = fs.readdirSync(__dirname);

files.filter((file) => {
  const name = removeExtension(file);
  if (name != 'index') {
    router.use(`/${name}` ,require(`./${name}`))
  }
})

module.exports = router;


