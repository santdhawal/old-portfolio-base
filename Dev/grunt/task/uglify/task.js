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
				uglify: {
					options: {
						mangle: {
							except: ['jQuery']
						},
						sourceMap: false,
        				//sourceMapName: 'Dist/themes/o2_theme/js/main.min.js.map',
        				compress: {
							drop_console: true
						}
					},
					dev: {
						
					},
					release:{
						files: {
							'Dist/assets/js/libraries.min.js' : ['Dist/assets/js/jquery.js', 'Dist/assets/js/libraries.js'],
							'Dist/assets/js/main.min.js' : ['Dist/assets/js/main.js']
						}
					}
				}
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);
