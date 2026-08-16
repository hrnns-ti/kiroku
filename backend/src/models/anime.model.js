const pool = require('../config/database')

const getAll = async () => {
    const sql = 'SELECT * FROM animes'    
    const [rows] = await pool.execute(sql)    
    return rows
}

const addAnime = async (animeData) => {
    const sql = 'INSERT INTO animes (jikan_id, title, image_url, synopsis, score, year, total_episodes, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    const values = [
        animeData.jikan_id,
        animeData.title,
        animeData.image_url,
        animeData.synopsis || null,
        animeData.score || null,
        animeData.year || null,
        animeData.total_episodes || null,
        animeData.status || 'plan_to_watch'
    ];
    const [result] = await pool.execute(sql, values)
    return result.insertId
}

const deleteAnime = async (id) => {
    const sql = 'DELETE FROM animes WHERE id = ?'
    const [result] = await pool.execute(sql, [id])
    return result.affectedRows
}

const updateAnime = async (id, status, episodes_watched) => {
    const sql = 'UPDATE animes SET episodes_watched = ?, status = ? WHERE id = ?'
    const values = [episodes_watched, status, id]
    const [result] = await pool.execute(sql, values)
    return result.affectedRows
}

module.exports = {
    getAll,
    addAnime,
    deleteAnime,
    updateAnime
}