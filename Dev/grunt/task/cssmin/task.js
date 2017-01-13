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
				cssmin: {
					options: {
						shorthandCompacting: false,
						roundingPrecision: -1
					},
					target: {
						files: [{
							expand: true,
							cwd: 'Dist/assets/css',
							src: ['*.css', '!*.min.css'],
							dest: 'Dist/assets/css',
							ext: '.min.css'
						}]
					}
				}
			}
		};
	},
	register: function () {

	}
};

module.exports = Task.init.bind(Task);
