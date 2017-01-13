require('shelljs/global');
var grunt;
var Task = {
	options:null,
	init: function (_grunt, _options){
		grunt = _grunt;
		this.options = _options;
		this.register();
		return this.getConfig();
	},
	getConfig: function () {
		return {
			tasks: {
				semistandard: {
					options: {
						format: true,
						lint: true
					},
					app: {
						src: [
						'App/src/component/**/*.js'
						]
					}
				},
				sasslint: {
					options: {
						configFile: 'Dev/grunt/task/lint/config/.sass-lint.yml',
					},
					target: ['App/src/**/*.scss', 'App/src/component/**/style/**/*.scss']
				}
			}
		};
	},
	register: function () {
		grunt.registerTask('lint',['semistandard','sasslint']);
	}
};

module.exports = Task.init.bind(Task);