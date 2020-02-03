var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')
  var myobj = [
    { _id: 154, Supplier: 'Aapico', Project: 'DQ381, 250K, 250L, MQ100, DCT-300', ContactName: 'Diogo Sá', Position: 'Product Development Engineer', PhoneNumber: '+351 934 044 634', email: 'diogo.sa@aapico.com' },
    { _id: 155, Supplier: 'Geoyang', Project: 'DCT-300', ContactName: 'John Park', Position: 'Parkstar Managing Director', PhoneNumber: '+82 10 7488 5468', email: 'johnpark@parkstar.kr' }
  ]
  dbo.collection('Contacts').insertMany(myobj, function (err, res) {
    if (err) throw err
    console.log('Number of documents inserted: ' + res.insertedCount)
    client.close()
  })
})
