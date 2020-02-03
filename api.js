const express = require('express')
const router = express.Router()

// App Routes
module.exports = ({ db }) => {
  router.get('/contacts', (req, res) => {
    db.collection('Contacts').find().toArray((err, result) => {
      if (err) throw err
      res.send(result)
    })
  })

  router.post('/contacts', (req, res) => {
    db.collection('Contacts').insertOne(req.body, (err, result) => {
      if (err) throw err
      res.send(result)
    })
  })

  return router
}
