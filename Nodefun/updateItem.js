var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')

  var myquery = { ContactName: 'John Park' }
  var newvalues = { $set: { Position: 'Parkstar Managing Director' } }
  dbo.collection('Contacts').updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err
    console.log(res.result.nModified)
    client.close()
  })
})
