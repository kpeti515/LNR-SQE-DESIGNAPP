const express = require('express')
const axios = require('axios')
const router = express.Router()

axios.defaults.baseURL = 'http://localhost:3000/' // TODO: only for dev purposes

// App Routes

router.get('/', (req, res) => res.render('index'))

router.get('/actionplans', (req, res) => res.render('actionplans'))

router.get('/beszallitok', async (req, res) => {
  try {
    const result = await axios.get('/api/contacts')
    const viewData = { Contacts: result.data }
    res.render('beszallitok', viewData)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.get('/ppap', (req, res) => res.render('ppap'))
router.get('/psw', (req, res) => res.render('psw'))
router.get('/tanusitvanyok', (req, res) => res.render('tanusitvanyok'))

// TODO: move it to the client's codebase
router.post('/contacts', async (req, res) => {
  const result = await axios.post('/api/contacts', req.body)
  console.log(result)
  res.redirect('/')
})

module.exports = router
