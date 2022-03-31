const express = require('express')
const router = express.Router()

const db = require('./db')

router.get('/', (req, res) => {
  db.getAllRecipes().then((recipes) => {
    const data = {
      recipes,
    }

    res.render('home', data)
  })
})
