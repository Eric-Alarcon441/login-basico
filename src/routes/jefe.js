const express = require('express');
const router = express.Router();

router.get('/jefe', (req, res) => {
	res.render('jefe', req.session.data);
});

module.exports = router;
