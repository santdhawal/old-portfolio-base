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
				env: {
					dev: {
				        NODE_ENV : 'DEVELOPMENT'
				    },
				    release: {
				        NODE_ENV : 'RELEASE'
				    }
				}
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);
