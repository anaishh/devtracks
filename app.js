const express = require('express');
const dbConnect = require('./config/mongo.js')

const port = process.env.PORT ?? 3000

const app = express()
app.use(express.json())
app.use(express.static('storage'))
dbConnect()

app.use('/api', require('./routes'))

const servidor = app.listen (port,()=> {
  console.log(`Escuchando en el puerto ${port}`)
})
    
servidor.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Puerto ocupado')
}})