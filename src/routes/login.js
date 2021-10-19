const express = require('express');
const session = require('express-session');
const router = express.Router();
const dbConn = require('../dbConn');
const conn = dbConn();
router.get('/', (req, res) => {
	req.session.data = { regist: null, msg: null };
	res.render('login', req.session.data);
});

router.post('/', (req, res) => {
	const { email, password } = req.body;
	conn.query(
		'select * from usuario where email = ? and password = ?',
		[email, password],
		(err, usuario) => {
			if (usuario.length >= 1) {
				req.session.data.msg = null;
				usuario[0].role === 1
					? ((req.session.data.regist = 'jefe'), res.redirect('/jefe'))
					: ((req.session.data.regist = 'cliente'), res.redirect('/cliente'));
			} else {
				req.session.data.msg = 'Usuario o contraseña incorrectos';
				res.render('login', req.session.data);
			}
		}
	);
});

module.exports = router;
