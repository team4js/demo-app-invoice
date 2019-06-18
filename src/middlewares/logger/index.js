/**
 * Created by Igor Gojkovic on 18/06/2019 - 19:51
 * Project name - demo-app
 * File name - index
 * Description -
 */
const morgan = require('morgan');
const LoggerStreamAdapter = require('../../config/logger/logger-stream-adapter');

module.exports = ({ logger }) => {
	return morgan('dev', {
		stream: LoggerStreamAdapter.toStream(logger)
	});
};
