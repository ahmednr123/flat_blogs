const Cookie = {
	init: function () { 
		let obj = this
		
		return function (req, res, next) {
			req.session = false

			let session_cookie = false
			const cookies = obj.parse(req.headers['cookie'])

			if (cookies)
				session_cookie = cookies['USESSIONID']
			
			if(!session_cookie)
				res.cookie('USESSIONID', 'axbc', { maxAge: 900000, httpOnly: true })
			else {
				if (session_cookie == 'axbc') {
					console.log("User Active Session")
					req.session = true
				}
			}

			next()
		}
	},

	parse: function (string) {
		if (!string) return false

		let arr = string.split(';').map((element) => element.trim())

		let json = {}

		for (let cookie of arr) {
			cookie = cookie.split('=')
			json[cookie[0]] = cookie[1]
		}

		return json
	},

	stringify: function (json) {
		if (!json) return false

		let string = ""

		for (let name in json) 
			string += name.trim() + '=' + json[name].trim() + ';'
		string = string.slice( 0, string.length - 1)

		return string
	}
}

module.exports = Cookie