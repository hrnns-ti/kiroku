const collections = require('../models/collection.model')

async function getAll(req, res) {
  try {
    const collectionData = await collections.getCollection()
    res.status(200).json({
      status: true,
      message: 'Cuayo',
      data: collectionData
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Skill issue: ' + error
    })
  }
}

async function name(params) {
  
}

module.exports = {
  getAll,
}