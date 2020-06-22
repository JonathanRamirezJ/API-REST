const user = require('../models/user');

module.exports = (app) => {
	app.get('/', (req, res) => {
		res.json([]);
	});

	app.get('/users', (req, res) => {
		user.getUsers((err, data) => {
			res.status(200).json(data);
		})
	});

	app.post('/users', (req, res) => {
		const userData = {
			id: null,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			created_at: null,
			update_at: null
		};

		user.insertUser(userData, (err, data) => {
			if(data && data.insertId) {
				res.json({
					success: true,
					message: 'Usuario insertado correctamente',
					data: data
				});
			}
		})
	});

	app.put('/users/:id', (req, res) => {
		const userData = {
			id: req.params.id,
			username: req.body.username,
			password: req.body.password,
			email: req.body.email,
			created_at: null,
			update_at: null
		};

		user.updateUser(userData, (err, data) => {
			if(data && data.message) {
				res.json(data);
			} else {
				res.json({
					success: false,
					message: 'Ocurrio un error'
				})
			}
		});
	})

	app.delete('/users/:id', (req, res) => {
		user.deleteUser(req.params.id, (err, data) => {
			if(data && data.message === 'deleted' || data.message === 'not exist') {
				res.json({
					success: true,
					message: data.message
				});
			} else {
				res.status(500).json({
					success: false,
					message: "Error al eliminar usuario"
				})
			}
		})
	});
};