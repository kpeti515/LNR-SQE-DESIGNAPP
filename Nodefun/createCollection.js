var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')
  dbo.createCollection('Customers', function (err, res) {
    if (err) throw err
    console.log('Collection created!')
    client.close()
  })
})
