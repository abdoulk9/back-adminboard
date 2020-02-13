const express = require('express');
const mysql = require('mysql');
const db = require('../connections/data');

const router = express.Router();


//Création d'un utilisateur (Create)
router.post('/new', (req, res) => {
    let insertUser = "INSERT INTO user (name, passeword, mail) VALUES (?,?,?)";

    let userInfos = [
        name = req.body.name,
        passeword = req.body.passeword,
        mail = req.body.mail
    ];

    let query = mysql.format(insertUser, userInfos);
    db.query(query, (err, response) => {
        if (err) {
            console.log(err);
            res.json({ success: false });
        } else {
            res.json({ success: true, data: response });
            console.log(response + "ce utilisateur est crée avec succès! ")
        }
    });
});

//selection de tous les utilisateurs(READ)
router.get('/', (req, res) => {

    db.query("SELECT * FROM user", (err, response) => {
        if (err) {
            res.json({ error: err });
            console.log(error);
        } else {
            res.json({ users: response});
            console.log(response);
        }
    });
});

//SELECT ONE
router.get('/:id', (req, res) =>{
   

     let  QuerySelectOne ="SELECT * FROM user WHERE id = ?";
     //req.params.id = id;
     console.log(req.params.id);
      let query = mysql.format(QuerySelectOne, [id = req.params.id]);
      db.query(query, (err, response) =>{
          if(err){
              console.error;
          }else{
              res.json({ user: response});
              console.log(response);
          }
      });
});


module.exports = router;