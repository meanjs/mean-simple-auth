module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	app.route('/').get(index.render);
};