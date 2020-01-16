const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const routes = require('./routes')

// Middleware
server.engine('hbs', hbs({
    extname: 'hbs', defaultLayout: 'main'
    }))
  server.set('view engine', 'hbs')
  server.use(express.static('public'))

//routes
  server.use('/', routes)
  server.get('/', (req, res) => {
	res.redirect('/pantheon',)
    })


  module.exports = server
