var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')
  dbo.collection('Contacts').find({}, { projection: { _id: 0, ContactName: 1, email: 1 } }).toArray(function (err, result) {
    if (err) throw err
    console.log(result[2].email)
    client.close()
  })
})
