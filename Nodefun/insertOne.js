var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://Kpeti515:P2peters@backendtest-sxxo1.mongodb.net/test?retryWrites=true&w=majority'

const client = new MongoClient(url, { useUnifiedTopology: true })

client.connect().then((client) => {
  var dbo = client.db('SupplierQualityEngineer')
  var myobj = { Supplier: 'Aapico', Project: 'Sakthi', ContactName: 'Raquel Saraiva', Position: 'Quality Engineer', PhoneNumber: '+351 935 030 658', email: 'raquel.saraiva@aapico.com' }
  dbo.collection('Contacts').insertOne(myobj, function (err, res) {
    if (err) throw err
    console.log('1 document inserted')
    client.close()
  })
})
