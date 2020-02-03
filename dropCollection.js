// táblázat törlése

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')
  dbo.collection('PPAP').drop(function (err, delOK) {
    if (err) throw err
    if (delOK) console.log('Collection deleted')
    client.close()
  })
})
