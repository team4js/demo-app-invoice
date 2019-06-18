/**
 * Created by Igor Gojkovic on 18/06/2019 - 21:40
 * Project name - demo-app
 * File name - dev-error
 * Description -
 */
const Status = require('http-status');

/* istanbul ignore next */
module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
	const { logger } = req.container.cradle;

	logger.error(err);

	res.status(Status.INTERNAL_SERVER_ERROR).json({
		type: 'InternalServerError',
		message: err.message,
		stack: err.stack
	});
};
