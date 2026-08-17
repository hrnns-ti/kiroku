const express = require('express')
const router = express.Router()

const anime = require('../controllers/anime.controller')

router.get('/', anime.getAllAnime)
router.post('/', anime.addAnime)
router.delete('/:id', anime.deleteAnime)
router.patch('/:id', anime.updateAnime)

module.exports = router