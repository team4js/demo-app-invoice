/**
 * Created by Igor Gojkovic on 18/06/2019 - 21:39
 * Project name - demo-app
 * File name - error
 * Description -
 */
const Status = require('http-status');

/* istanbul ignore next */
module.exports = (err, req, res, next) => { // eslint-disable-line no-unused-vars
	const { logger } = req.container.cradle;

	logger.error(err);

	res.status(Status.INTERNAL_SERVER_ERROR).json({
		type: 'InternalServerError',
		message: 'The server failed to handle this request'
	});
};
