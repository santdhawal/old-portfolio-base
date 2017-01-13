var grunt;
var Task = {
	COMPONENT_PATH:'App/src/component/',
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
					component: {
						cwd: 'Dev/grunt/resource/template/component/',  
						expand: true,
						src: ['**'],
						dest: Task.COMPONENT_PATH + '<%= grunt.option(\'name\') %>/',
						rename: function(dest, src) {
							return dest + src.replace('example',grunt.option('name'));
						}
					}
				}
			}
		};
	},
	createFolder: function(){
		this.checkOption();
		var name  = grunt.option('name');
		grunt.file.mkdir(this.COMPONENT_PATH + name);
	},
	changeFiles: function () {
		this.update('style','scss');
		this.update('template','html');
		this.includeStyle();
	},
	update: function (folder,extension) {
		var name = grunt.option('name');
		var filePath = Task.COMPONENT_PATH + name + '/' + folder + '/' + name + '.' + extension;
		console.log(filePath);
		var content = grunt.file.read(filePath);
		content = content.replace(/example/g,name);
		grunt.file.write(filePath, content);                                                                                                                                    
	},
	includeStyle: function () {
		var name = grunt.option('name');
		var filePath = 'App/src/import.scss';
		var content = grunt.file.read(filePath);
		content += '\n@import \'component/' + name + '/style/' + name + '\';';
		grunt.file.write(filePath, content);   
	},
	checkOption: function (){
		if(!grunt.option('name'))
		{
			grunt.fail.fatal(1,'Name not provided');	
		}

	},
	register: function () {
		grunt.registerTask('cc-create-folder',this.createFolder.bind(this));
		grunt.registerTask('cc-update',this.changeFiles.bind(this));
		grunt.registerTask('create-component',['cc-create-folder','copy:component','cc-update']);
		grunt.registerTask('cc',['create-component']);
	}
};

module.exports = Task.init.bind(Task);