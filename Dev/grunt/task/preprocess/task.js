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
				preprocess: {
				    dev: {
				        src : 'Dev/grunt/resource/template/page/index.html',
				        dest : 'Dist/_index.html'
				    },
				    release: {
				        src : 'Dev/grunt/resource/template/page/index.html',
				        dest : 'Dist/_index.html'
				    }
				}
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);
