/**
 * Created by Igor Gojkovic on 05/06/2019 - 18:25
 * Project name - demo-app
 * File name - index
 * Description -
 */
const express = require('express');

class Server {
	constructor({ config, router, logger }) {
		this.config = config;
		this.logger = logger;
		this.express = express();

		this.express.disable('x-powered-by');
		this.express.use(router);
	}

	start() {
		return new Promise((resolve) => {
			const http = this.express
				.listen(this.config.web.port, () => {
					const { port } = http.address();
					this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
					resolve();
				});
		});
	}
}

module.exports = Server;
