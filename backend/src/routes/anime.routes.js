const express = require('express')
const router = express.Router()

const anime = require('../controllers/anime.controller')

router.get('/all', anime.getAllAnime)
router.post('/add', anime.addAnime)
router.delete('/:id', anime.deleteAnime)
router.patch('/:id', anime.updateAnime)

module.exports = router