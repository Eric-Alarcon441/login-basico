const express = require('express');
const router = express.Router();

router.get('/cliente', (req, res) => {
	res.render('cliente', req.session.data);
});

module.exports = router;
