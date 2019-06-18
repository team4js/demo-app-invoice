/**
 * Created by Igor Gojkovic on 12/06/2019 - 20:51
 * Project name - demo-app
 * File name - development
 * Description -
 */
const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
	web: {
		port: 3000
	},
	logging: {
		appenders: {
			out: { type: 'stdout', layout: { type: 'colored' } },
			app: { type: 'file', filename: logPath }
		},
		categories: {
			default: { appenders: [ 'out', 'app' ], level: 'debug' }
		}
	}
};
