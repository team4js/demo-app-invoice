/**
 * Created by Igor Gojkovic on 12/06/2019 - 21:07
 * Project name - demo-app
 * File name - index
 * Description -
 */
class Application {
	// database
	constructor({ server, logger }) {
		this.server = server;
		// this.database = database;
		this.logger = logger;

		// if(database && database.options.logging) {
		// 	database.options.logging = logger.info.bind(logger);
		// }
	}

	async start() {
		// if(this.database) {
		// 	await this.database.authenticate();
		// }

		await this.server.start();
	}
}

module.exports = Application;
