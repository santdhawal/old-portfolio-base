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
			tasks:{
				bake: {
					index: {
						options: {
							content: 'App/src/component/core/content/data.json'
						},
						files: {
							"Dist/index.html": "App/index.html"
						}
					}
				},
				prettify: {
					index: {
						options: {
							config: 'Dev/grunt/task/bake/.prettifyrc'
						},
						files: {
							'Dist/index.html': ['Dist/index.html']
						}
					}

				}
			}
		};
	},
	register: function () {
		grunt.registerTask('bake-and-format', ['bake','prettify:index']);
	}
};

module.exports = Task.init.bind(Task);
