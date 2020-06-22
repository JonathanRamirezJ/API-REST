const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'api_rest_db'
});

let userModel = {};

userModel.getUsers = callBack => {
	if(connection) {
		connection.query('SELECT * FROM users ORDER BY id', (err, rows) => {
			if(err) {
				throw err;
			} else {
				callBack(null, rows);
			}
		});
	}
};

userModel.insertUser = (userData, callBack) => {
	if(connection) {
		connection.query('INSERT INTO users SET ?', userData ,(err, resp) => {
			if(err) {
				throw err;
			} else {
				callBack(null, { 'insertId': resp.insertId });
			}
		})
	}
};

userModel.updateUser = (userData, callBack) => {
	if(connection) {
		const sql = `
			UPDATE users SET 
			username = ${connection.escape(userData.username)},
			password = ${connection.escape(userData.password)},
			email = ${connection.escape(userData.email)}
			WHERE id = ${connection.escape(userData.id)}
		`;

		connection.query(sql, (err, resp) => {
			if(err) {
				throw err;
			} else {
				callBack(null, { 'message': 'success' });
			}
		});
	}
};

userModel.deleteUser = (id, callBack) => {
	if(connection) {
		const sqlExist = `SELECT * FROM users WHERE id=${connection.escape(id)}`;
		connection.query(sqlExist, (err, row) => {
			if(row.length > 0) {
				const sql = `DELETE FROM users WHERE id = ${connection.escape(id)}`;
				connection.query(sql, (err, result) => {
					if(err) {
						throw err;
					} else {
						callBack(null, { 'message': 'deleted' });
					}
				})
			} else {
				callBack(null, { 'message': 'not exist' });
			}
		});
	}
};

module.exports = userModel;