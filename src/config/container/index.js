/**
 * Created by Igor Gojkovic on 12/06/2019 - 21:06
 * Project name - demo-app
 * File name - index
 * Description -
 */
const { createContainer, asClass, asFunction, asValue } = require('awilix');
const { scopePerRequest } = require('awilix-express');

const config = require('../index');
const Application = require('../application');
// const {
// 	CreateUser,
// 	GetAllUsers,
// 	GetUser,
// 	UpdateUser,
// 	DeleteUser
// } = require('./app/user');

// const UserSerializer = require('./interfaces/http/user/UserSerializer');

const Server = require('../server');
const router = require('../router');
const loggerMiddleware = require('../../middlewares/logger');
const errorHandler = require('../../handlers/error/error');
const devErrorHandler = require('../../handlers/error/dev-error');
// const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');

const logger = require('../logger');
// const SequelizeUsersRepository = require('./infra/user/SequelizeUsersRepository');
// const { database, User: UserModel } = require('./infra/database/models');

const container = createContainer();

// System
container
	.register({
		app: asClass(Application).singleton(),
		server: asClass(Server).singleton()
	})
	.register({
		router: asFunction(router).singleton(),
		logger: asFunction(logger).singleton()
	})
	.register({
		config: asValue(config)
	});

// Middlewares
container
	.register({
		loggerMiddleware: asFunction(loggerMiddleware).singleton()
	})
	.register({
		containerMiddleware: asValue(scopePerRequest(container)),
		errorHandler: asValue(config.production ? errorHandler : devErrorHandler)
		// 		swaggerMiddleware: asValue([swaggerMiddleware])
	});

// Repositories
// container.register({
// 	usersRepository: asClass(SequelizeUsersRepository).singleton()
// });

// Database
// container.register({
// 	database: asValue(database),
// 	UserModel: asValue(UserModel)
// });

// Operations
// container.register({/
// 	createUser: asClass(CreateUser),
// 	getAllUsers: asClass(GetAllUsers),
// 	getUser: asClass(GetUser),
// 	updateUser: asClass(UpdateUser),
// 	deleteUser: asClass(DeleteUser)
// });

// Serializers
// container.register({
// 	userSerializer: asValue(UserSerializer)
// });

module.exports = container;
