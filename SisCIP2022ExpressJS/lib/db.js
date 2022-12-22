var mysql = require('mysql');
var connection = mysql.createConnection({
	multipleStatements: true,
	port: '3306',
	host:'localhost',
	user:'root',
	password:'',
<<<<<<< HEAD
	//nombre de la tabla
	database:'medicocr'
});
// definir conexion
=======
	database:'medicocr'
});


	//nombre de la tabla
	database:'centromedicocr'
;
// definir conexion

>>>>>>> fcbc6047fa3366f929524319525cc1c04b841e3c
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;
