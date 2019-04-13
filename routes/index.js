const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	//res.end(`Session: ${req.session}`)
	res.render('home')
})

router.get('/blog', (req, res) => {
	res.render('blog')
})

module.exports = router