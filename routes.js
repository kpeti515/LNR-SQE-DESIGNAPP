const express = require('express')
const axios = require('axios')
const router = express.Router()

axios.defaults.baseURL = 'http://localhost:3000/' // TODO: only for dev purposes

// App Routes
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/beszallitok', async (req, res) => {
  try {
    const result = await axios.get('/api/contacts')
    const viewData = { Contacts: result }
    res.render('beszallitok', viewData)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post('/contacts', async (req, res) => {
  const requestData = req.body
  const result = await axios.post('/api/contacts', requestData)
  console.log(result)
  res.redirect('/')
})

module.exports = router
