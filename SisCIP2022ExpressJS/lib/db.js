var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
<<<<<<< HEAD
	port: '3308',
	host:'localhost',
	user:'root',
	password:'',
=======
	port: '3306',
	host:'localhost',
	user:'root',
	password:'',
<<<<<<< HEAD
>>>>>>> 7e29d14f007fb06760aa20435abf318a9b0e43e3
	//nombre de la tabla
	database:'medicocr'
});
// definir conexion
<<<<<<< HEAD
=======
=======
	database:'medicocr'
});


	//nombre de la tabla
	database:'centromedicocr'
;
// definir conexion

>>>>>>> fcbc6047fa3366f929524319525cc1c04b841e3c
>>>>>>> 7e29d14f007fb06760aa20435abf318a9b0e43e3
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
