const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const skills = require('./skills.js')

// Middleware
server.engine('hbs', hbs({
    extname: 'hbs', defaultLayout: 'main'
    }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))

//routes
  server.get('/', (req, res) => {
	res.render('./index.hbs',)
    })

  module.exports = server
