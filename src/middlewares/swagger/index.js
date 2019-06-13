const apiList = [];

let tagsLabel = [];
let paths = {};
let definitions = {};

apiList.forEach(api => {
	if (api.tags)
		tagsLabel = tagsLabel.concat(api.tags);

	if (api.paths)
		Object.assign(paths, api.paths);

	if (api.definitions)
		Object.assign(definitions, api.definitions);
});

export default {
	'swagger': '2.0',
	'info': {
		'version': '1.0.0',
		'title': 'API Documentation',
		'description': '',
		'license': {
			'name': 'Apache 2.0',
			'url': 'http://www.apache.org/licenses/LICENSE-2.0'
		}
	},
	'host': 'localhost:3006',
	'basePath': '/v1',
	'schemes': [
		'http'
	],
	'consumes': [
		'application/json'
	],
	'produces': [
		'application/json'
	],
	securityDefinitions: {
		api_key: {
			type: 'apiKey',
			name: 'Authorization',
			in: 'header',
			value: 'test'
		}
	},
	security: [
		{
			api_key: []
		}
	],
	tagsLabel,
	paths,
	definitions
};
