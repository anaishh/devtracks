const mongoose = require('mongoose')

const dbConnect = () => {
  
  const db_uri = process.env.DB_URI
  mongoose.connect(db_uri).then(()=> 
    console.log("Conectado a mongo")
  ).catch((err) =>
  console.error("ERROR", err))
  
}

module.exports = dbConnect