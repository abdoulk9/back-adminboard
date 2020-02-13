
const mysql = require('mysql');

//création d'un objet de connection
const dataConnect = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"userdata"
});

//fonction qui verifie la connection à la BD
dataConnect.connect(function(err){
    if(!err){
        console.log("Database is connected!");
    }else{
        console.log("Error connecting database, check the server!");
    }
});

//Activation de la connection
dataConnect.query('USE userdata');


//Exportation de la connection
module.exports = dataConnect; 