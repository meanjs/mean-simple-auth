exports.render = function(req, res) {
	res.render('index', {
		user: JSON.stringify(req.user)
	});
};
