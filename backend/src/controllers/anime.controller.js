const anime = require('../models/anime.model');

async function getAllAnime(req, res) {
  try {
    const animeData = await anime.getAll() 

    res.status(200).json({
      status: true,
      message: 'Cuayo',
      data: animeData
    })
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Wayoloh error: ' + error,
    })
  }
}

async function addAnime(req, res) {
  const animeData = req.body
  console.log(req.body)
  if (!animeData.jikan_id || !animeData.title) {
    return res.status(400).json({
      status: false,
      message: 'jikan_id dan title wajib diisi!'
    });
  }

  try {
    const newAnimeId = await anime.addAnime(animeData);
    res.status(201).json({
      status: true,
      message: 'Anime berhasil ditambahkan ke Kiroku!',
      data: {
        id: newAnimeId,
        jikan_id: animeData.jikan_id,
        title: animeData.title,
      },
    });
  } catch (error) {
    console.error('Error di addAnime:', error.message);
    if (error.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({
            status: false,
            message: 'Anime ini sudah ada di watchlist kamu!'
        });
    }

    res.status(500).json({
        status: false,
        message: 'Gagal menambahkan anime ke database: ' + error
    });
  }
}

async function deleteAnime(req, res) {
  const { id } = req.params
  try {
    const data = await anime.deleteAnime(id);

    if (affectedRows === 0) {
      return res.status(404).json({
        status: false,
        message: `Anime dengan ID ${id} tidak ditemukan di database`
      });
    }

    res.status(201).json({
      status: true,
      message: 'Berhasil hapus anime dari database',
      data: data
    })
  } catch (error) {
    res.status(500).json({
        status: false,
        message: 'Gagal menghapus anime dari database: ' + error.message
    });
  }
}

async function updateAnime(req, res) {
  const { id } = req.params
  const { episodes_watched, status } = req.body

  if (episodes_watched === undefined || !status) {
    return res.status(400).json({
      status: false,
      message: 'episodes_watched dan status wajib dikirim!'
    });
  }

  try {
    const data = await anime.updateAnime(id, status, episodes_watched)
    
    if (affectedRows === 0) {
      return res.status(404).json({
          status: false,
          message: `Anime dengan ID ${id} tidak ditemukan di Kiroku.`
      });
    }

    res.status(200).json({
      status: true,
      message: 'Progress anime berhasil diperbarui!'
    });
  } catch (error) {
    console.error('Error di updateProgress:', error.message);
    res.status(500).json({
      status: false,
      message: 'Gagal mengupdate progress anime: ' + error.message
    });
  }
}

module.exports = {
  getAllAnime,
  addAnime,
  deleteAnime,
  updateAnime
} 