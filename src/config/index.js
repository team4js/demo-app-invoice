/**
 * Created by Igor Gojkovic on 12/06/2019 - 20:13
 * Project name - demo-app
 * File name - index
 * Description -
 */
require('dotenv').config({ path: '../../.env' });

// const fs = require('fs');
const path = require('path');

const ENV = process.env.NODE_ENV || 'development';

const envConfig = require(path.join(__dirname, 'environments', ENV));

// console.log('env config', envConfig);
const dbConfig = loadDbConfig();

const config = Object.assign({
	[ENV]: true,
	env: ENV,
	db: dbConfig
}, envConfig);
console.log('config', config);
module.exports = config;

function loadDbConfig() {
	if(process.env.DATABASE_URL) {
		return process.env.DATABASE_URL;
	}

	// if(fs.existsSync(path.join(__dirname, './database.js'))) {
	// 	return require('./database')[ENV];
	// }
}
