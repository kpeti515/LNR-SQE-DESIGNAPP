const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const api = require('./api')

// Initialize DB connection
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'
const dbClient = new MongoClient(url, { useUnifiedTopology: true })

const start = async () => {
  try {
    const mongo = await dbClient.connect()
    const db = mongo.db('SupplierQualityEngineer')

    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use('/', routes)
    app.use('/api', api({ db }))
    app.listen(3000, () => console.log('listening on port: 3000'))
  } catch (error) {
    console.error(error)
  }
}

console.log('May Node be with you')
start()
