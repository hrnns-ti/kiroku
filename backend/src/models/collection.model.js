const pool = require('../config/database')

const getCollection = async () => {
  const sql = 'SELECT * FROM collections'
  const [rows] = await pool.execute(sql)
  return rows
}

const createCollection = async (name) => {
  const sql = 'INSERT INTO collections (name) VALUES (?)'
  const [result] = await pool.execute(sql, [name])
  return result.insertId
}

const deleteCollection = async (id) => {
  const sql = 'DELETE FROM collections WHERE id = ?'
  const [result] = await pool.execute(sql, [id])
  return result.affectedRows
}

const updateCollection = async (id, name) => {
  const sql = 'UPDATE collections SET name = ? WHERE id = ?'
  const values = [name, id]
  const [result] = await pool.execute(sql, values)
  return result.affectedRows
}

const addAnimeCollection = async (collectionId, animeId) => {
  const sql = 'INSERT INTO collection_items (collection_id, anime_id) VALUES (?, ?)'
  const values = [collectionId, animeId]
  const [result] = await pool.execute(sql, values)
  return result.insertId
}

const getAnimeByCollection = async (collectionId) => {
  const sql = `
    SELECT a.* 
    FROM animes a
    JOIN collection_items ci ON a.id = ci.anime_id
    WHERE ci.collection_id = ?
  `
  const [rows] = await pool.execute(sql, [collectionId])
  return rows
}

const removeAnimeFromCollection = async (collectionId, animeId) => {
    const sql = 'DELETE FROM collection_items WHERE collection_id = ? AND anime_id = ?'
    const [result] = await pool.execute(sql, [collectionId, animeId])
    return result.affectedRows
}

module.exports = {
  getCollection,
  createCollection,
  deleteCollection,
  updateCollection,
  addAnimeCollection,
  getAnimeByCollection,
  removeAnimeFromCollection
}