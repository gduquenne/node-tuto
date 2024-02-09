const Time = ({ app }) => {
	return app.get(
		'/time',
		(req, res, next) => {
			const time = new Date().toLocaleTimeString();
			req.time = time;
			next();
		},
		(req, res) => {
			res.render('time', {
				time: req.time,
				name: 'Michelangelo',
			});
		}
	);
};

export default Time;
