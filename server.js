// require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const api = require('./api')
const port = process.env.PORT
const database = process.env.DATABASE

// Initialize DB connection
const MongoClient = require('mongodb').MongoClient
const url = database
const dbClient = new MongoClient(url, { useUnifiedTopology: true })

const start = async () => {
  try {
    const mongo = await dbClient.connect()
    const db = mongo.db('SupplierQualityEngineer')

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use('/', routes)
    app.use('/api', api({ db }))
    app.listen(port, () => console.log(`Listening on port ${port}!`))
  } catch (error) {
    console.error(error)
  }
}

console.log('May Node be with you')
start()
