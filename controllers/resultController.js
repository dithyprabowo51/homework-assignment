const { data } = require('../models/data.js')

class resultController {
  static async getResult(req, res) {
    try {
      const resultData = await data.find()
      const resultMap = resultData.map(result => {
        let confidence
        if (result.confidence === '9') {
          confidence = 'high'
        } else if (result.confidence === '8') {
          confidence = 'medium'
        } else {
          confidence = 'low'
        }
        return {
          hotspottime: result.source_date,
          provinsi: result.provinsi,
          kabupaten: result.kabupaten,
          kecamatan: result.kecamatan,
          location: result.location,
          satellite: result.satellite,
          confidence
        }
      })
      res.status(200).json(resultMap)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = resultController