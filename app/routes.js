const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/contact', '/contact/index')
	.add('/advantages', '/advantages/index')
	.add('/services', '/services/index')
	.add('/expertise', '/expertise/index')


module.exports = routes;