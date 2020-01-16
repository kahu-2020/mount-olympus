const express = require('express')
const router = express.Router()
const fs = require('fs');

router.get('/pantheon', (req, res) => {
  fs.readFile('./gods.json', "utf8", (err, data) => {
    if(err){
        res.send("ohshit son ! there be an error")
      }
    const deity = JSON.parse(data).gods
    res.render('./index.hbs',deity)
      })
    })

router.get('/pantheon/:id', (req, res) => {
  god=req.params.id
  fs.readFile('./gods.json', "utf8", (err, data) => {
    if(err){
        res.send("ohshit son ! there be an error")
      }
    const deity = JSON.parse(data).gods.find(g =>{
      return g.name == god
      
    })
    res.send(deity)
  })
   
    
  })

module.exports = router