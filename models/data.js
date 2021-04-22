const mongoose = require('mongoose')

const dataSchema = mongoose.Schema({
  source_date: {
    type: String
  },
  provinsi: String,
  kabupaten: String,
  kecamatan: String,
  location: String,
  satellite: String,
  confidence: String
})

const data = mongoose.model('homework', dataSchema)

module.exports = { data }