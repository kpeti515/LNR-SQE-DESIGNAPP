const express = require('express')
const app = express()
const bodyParser = require('body-parser')

var dbo

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(url, { useUnifiedTopology: true })
client.connect().then((client) => {
  dbo = client.db('SupplierQualityEngineer')

  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

console.log('May Node be with you')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  // res.sendFile('C:/Users/Kallai_L/Downloads/Linamar SQE designapp/index.html')
  dbo.collection('Contacts').find().toArray(function (err, result) {
    if (err) throw err
    res.render('beszallitok.ejs', { Contacts: result })
  })
})

app.get('/beszallitok.html', (req, res) => {
  res.sendFile('C:/Users/Kallai_L/Downloads/Linamar SQE designapp/beszallitok.html')
})

app.post('/contacts', (req, res) => {
  dbo.collection('Contacts').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
