const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');


const db = require('./connections/data');

const routesUsers = require('./routes/user.route');
const app = express();

//Gestion des donnée postées
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Gestion des CORS pour autoriser les connexions provenants d'autres domaines
app.use(cors());

//Hachage du mot de passe
app.use((req, res, next) =>{
    if( req.body.passeword){
        req.body.passeword = crypto.createHash('sha1')
        .update(req.body.passeword)
        .digest('hex');
    }
    next();
});



app.use('/user', routesUsers);

app.listen(3000);