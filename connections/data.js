
const mysql = require('mysql');

//création d'un objet de connection
const dataConnect = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database:"userdata"
});

//Activation de la connection
dataConnect.query('USE userdata');


//Exportation de la connection
module.exports = dataConnect; 