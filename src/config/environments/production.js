/**
 * Created by Igor Gojkovic on 12/06/2019 - 20:51
 * Project name - demo-app
 * File name - production
 * Description -
 */
module.exports = {
	web: {
		port: process.env.PORT
	},
	logging: {
		appenders: [
			{ type: 'console', layout: { type: 'basic' } }
		]
	}
};
