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
				watch: {
					js: {
						files: ['App/src/javascripts/ie8.js','App/src/component/**/js/**/*.js'],
						options: {
							livereload: true
						},
						tasks: ['concat:dev']
					},
					content: {
						files: ['App/src/component/core/content/data.json'],
						options: {
							livereload: true
						},
						tasks: ['env:dev', 'copy:baseHTML', 'preprocess:dev', 'bake-and-format','inject','injectContent']
					},
					libs: {
						files: ['App/src/javascripts/**/*.js'],
						options: {
							livereload: true
						},
						tasks: ['concat:dev']
					},
					index: {
						files: ['App/index.html'],
						options: {
							livereload: true
						},
						tasks: ['env:dev', 'copy:baseHTML', 'preprocess:dev', 'bake-and-format','inject','injectContent']
					},
					templates: {
						files: ['App/src/component/**/template/**/*.html'],
						options: {
							livereload: true
						},
						tasks: ['env:dev', 'copy:baseHTML', 'preprocess:dev', 'bake-and-format','inject','injectContent']
					},
					style: {
						files: ['App/src/import.scss','App/src/component/**/style/**/*.scss'],
						options: {
							livereload: true
						},
						tasks: ['sass']
					}
				}
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);
