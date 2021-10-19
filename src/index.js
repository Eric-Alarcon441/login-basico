const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

//configuraciones
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'misecrto',
		resave: false,
		saveUninitialized: false,
	})
);
//rutas
app.use(require('./routes/login'));
app.use(require('./routes/jefe'));
app.use(require('./routes/cliente'));
app.get('*', (req, res) => {
	res.redirect('/');
});
//servidor escucha
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
