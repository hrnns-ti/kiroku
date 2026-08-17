const collections = require('../models/collection.model')

async function getCollection(req, res) {
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

async function createCollection(req, res) {
  const name = req.body.name
  try {
    const collectionData = await collections.createCollection(name)
    res.status(201).json({
      status: true,
      message: 'Collection berhasil ditambahkan ke Kiroku!',
      data: name
    })
  } catch (error) {
    console.error('Error di createCollection: ', error.message)
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            status: false,
            message: 'Collection ini sudah ada!'
        })
    }

    res.status(500).json({
        status: false,
        message: 'Gagal menambahkan collection ke database: ' + error
    })
  }
}

async function deleteCollection(req, res) {
  const { id } = req.params
  try {
    const data = await collections.deleteCollection(id);

    if (data === 0) {
      return res.status(404).json({
        status: false,
        message: `Collection dengan ID ${id} tidak ditemukan di database`
      });
    }

    res.status(200).json({
      status: true,
      message: 'Berhasil hapus collection dari database',
      data: data
    })
  } catch (error) {
    res.status(500).json({
        status: false,
        message: 'Gagal menghapus anime dari database: ' + error.message
    })
  }
}

async function updateCollection(req, res) {
  const { id } = req.params
  const { name } = req.body

  try {
    const data = await collections.updateCollection(id, name)
    
    if (data === 0) {
      return res.status(404).json({
          status: false,
          message: `Collection dengan ID ${id} tidak ditemukan di Kiroku.`
      });
    }

    res.status(200).json({
      status: true,
      message: 'Progress collection berhasil diperbarui!'
    });
  } catch (error) {
    console.error('Error di updateProgress:', error.message);
    res.status(500).json({
      status: false,
      message: 'Gagal mengupdate progress anime: ' + error.message
    });
  }
}

async function addCollection(req, res) {
  const collectionId = req.params.id
  const animeId = req.body.animeId

  try {
    const data = await collections.addAnimeCollection(collectionId, animeId)
    res.status(200).json({
      status: true,
      message: 'Cuayo',
      data: data
    })
  } catch (error) {
    console.error('Error di addCollection: ', error.message)
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            status: false,
            message: 'Collection ini sudah ada!'
        })
    }

    res.status(500).json({
        status: false,
        message: 'Gagal menambahkan anime ke collection: ' + error
    })
  }
}

async function getAnimeByCollection(req, res) {
  const collectionId = req.params.id
  try {
    const data = await collections.getAnimeByCollection(collectionId)
    res.status(200).json({
      status: true,
      message: 'Cuayo',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Skill issue: ' + error
    })
  }
}

async function removeAnimeCollection(req, res) {
  const { collectionId, animeId} = req.params
  try {
    const data = await collections.removeAnimeFromCollection(collectionId, animeId);
    res.status(200).json({
      status: true,
      message: 'Berhasil hapus anime dari collection',
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Gagal menghapus anime dari collection: ' + error.message
    })
  }
}

module.exports = {
  getCollection,
  createCollection,
  deleteCollection,
  updateCollection,
  addCollection,
  getAnimeByCollection,
  removeAnimeCollection
}