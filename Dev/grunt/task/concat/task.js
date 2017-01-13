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
				concat: {
					options: {
						separator: ';',
						stripBanners: 'line'
					},
					dev: {
						files: {
							'Dist/assets/js/main.js' : ['App/src/component/core/js/constants.js','App/src/component/**/js/**/*.js'],
							'Dist/assets/js/libraries.js' : ['App/src/javascripts/jquery/*.js', 'App/src/javascripts/bootstrap/*.js', 'App/src/javascripts/*.js'],
							'Dist/assets/css/libraries.css' : ['App/src/styles/lib/*.css']
						}
					},
					release:{
						files: {
							'Dist/assets/js/main.js' : ['App/src/component/core/js/constants.js','App/src/component/**/js/**/*.js'],
							'Dist/assets/js/jquery.js' : ['App/src/javascripts/jquery/*.js'],
							'Dist/assets/js/libraries.js' : ['App/src/javascripts/bootstrap/*.js', 'App/src/javascripts/*.js'],
							'Dist/assets/css/libraries.css' : ['App/src/styles/lib/*.css']
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
