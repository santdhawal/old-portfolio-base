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
				copy: {
					options: {
					},
					index: {
						src: ['App/index.html'],
						dest: 'Dist/index.html'
					},
					assets: {
						expand: true,
						src: ['**/*'],
						dest: 'Dist/assets/',
						cwd: 'App/src/assets/'
					},
					dist: {
						expand: true,
						src: ['**/*'],
						dest: '',
						cwd: 'Dist'
					}
				}
			}
		};
	},
	register: function () {
	}
};

module.exports = Task.init.bind(Task);
