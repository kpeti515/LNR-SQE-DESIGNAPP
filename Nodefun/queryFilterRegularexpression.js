var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')

  // var query = { Supplier: /^A/ } // kezdőbetűre szűrés
  var mysort = { Supplier: 1 }
  dbo.collection('Contacts').find().sort(mysort).toArray(function (err, result) {
    if (err) throw err
    console.log(result)
    client.close()
  })
})
