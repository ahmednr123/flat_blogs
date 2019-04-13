const express = require('express')
const Cookie = require('./modules/cookie')
const app = express()

const indexRoutes = require('./routes/index')

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(Cookie.init())

app.use('/', indexRoutes)

app.listen(8080, () => {
	console.log('Server started at 8080')
})