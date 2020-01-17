const express = require('express')
const router = express.Router()
const fs = require('fs');



router.get('/pantheon', (req, res) => {
  fs.readFile('./gods.json', "utf8", (err, data) => {
    if(err){
        res.send("ohshit son ! there be an error")
      }
    const deity = JSON.parse(data)

    res.render('./index.hbs', deity)
      })
    })

router.get('/pantheon/:id', (req, res) => {
  god=req.params.id
  fs.readFile('./gods.json', "utf8", (err, data) => {
    if(err){
        res.send("ohshit son ! there be an error")
      }
    let deity = JSON.parse(data).gods.find(g =>{
      return g.name == god
      
    })
    res.render('./profile.hbs', deity)
  })
  })

  router.get('/form/:id',(req, res) =>{
    god=req.params.id
    deity = {
      god:god,
      image:"/images/"+god.toLowerCase()+".jpg" 
    }
    res.render('./form.hbs', deity)
  })


 router.post('/form/:id' ,(req, res) =>{
    god=req.params.id
    let updatedgod = {

    }
    fs.readFile('./gods.json', "utf8", (err, data) => {
      if(err){
          res.send("ohshit son ! there be an error")
        }
        let deity = JSON.parse(data).gods.map(g => {
          if(g.name == god){
            g = updatedgod
          }
        }) 
      })
    fs.writeFile('./gods.json', JSON.stringify(deity, null, 2), (err) => {
      if(err){
        res.send("ohshit son ! there be an error")
        res.redirect('/')
       }
      
    })  

 })
module.exports = router