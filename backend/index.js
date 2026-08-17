const express = require('express')
const cors = require('cors')
const env = require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000

const animeRouter = require('./src/routes/anime.route')
const collectionRouter = require('./src/routes/collection.route')

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
  try {
    res.json({ status: 'Server is Healthy' })
  } catch (error) {
    res.json('Error: ' + error)
  }
})

app.use('/api/animes', animeRouter)
app.use('/api/collections', collectionRouter)

app.listen(port, () => {
  console.log(`\nServer running in localhost:${port}`);
})