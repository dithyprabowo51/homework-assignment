require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const resultRoutes = require('./routes/resultRoutes.js')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })

// Routing
app.use(resultRoutes)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Connection to database successfully')
  app.listen(PORT, () => console.log('Server is running on port', PORT))
})