/**
 * Created by Igor Gojkovic on 07/06/2019 - 15:54
 * Project name - demo-app
 * File name - index.js
 * Description -
 */
const container = require('src/container');

const app = container.resolve('app');

app
	.start()
	.catch((error) => {
		app.logger.error(error.stack);
		process.exit();
	});
