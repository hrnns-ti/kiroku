const express = require('express')
const router = express.Router()

const collection = require('../controllers/collection.controller')

router.get('/', collection.getCollection)
router.post('/', collection.createCollection)
router.delete('/:id', collection.deleteCollection)
router.patch('/:id', collection.updateCollection)

router.post('/:id/animes', collection.addCollection)
router.get('/:id/animes', collection.getAnimeByCollection)
router.delete('/:collectionId/animes/:animeId', collection.removeAnimeCollection)

module.exports = router