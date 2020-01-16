const express = require('express')
const router = express.Router()
const fs = require('fs');

router.get('/pantheon', (req, res) => {
    res.render('./index.hbs',)
      })

router.get('/pantheon/:id', (req, res) => {
    let god = req.params.id
    
    res.send(god)
      })

module.exports = router