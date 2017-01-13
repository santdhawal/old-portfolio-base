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
			tasks:{
				concurrent: {
					dev: {
						tasks:  ['watch', 'serve']
					},
					options: {
						logConcurrentOutput: true
					}
				},
				clean: {
					dist: ['Dist'],
					release: ['assets', 'index.html', 'Dist/assets/css/*.css', '!Dist/assets/css/*.min.css', 'Dist/assets/js/*.js', '!Dist/assets/js/*.min.js',]
				},
				inject: {
					livereload: {
						scriptSrc: 'Dev/server/resource/livereload.js',
						files: {
							'Dist/index.html': 'Dist/index.html'
						}
					}
				},
				copy:{
					baseHTML:{
						src: ['Dev/grunt/resource/template/page/index.html'],
						dest: 'Dist/_index.html'
					}
				}
			}
		};
	},
	runServer: function () {
		exec('node Dev/server/Server.js');
	},
	injectContent: function () {
		grunt.option("force", true);
		var content = grunt.file.read('Dist/index.html');
		var o2content = grunt.file.read('Dist/_index.html');
		var pattern = /<body[^>]*>((.|[\n\r])*)<\/body>/im;
		var array_matches = pattern.exec(content);

		o2content = this.includeHeadTags(content,o2content,'script');
		o2content = this.includeHeadTags(content,o2content,'link');
		o2content = o2content.replace('<!--ADD-->',array_matches[1]);


		grunt.file.write('Dist/index.html',o2content);
		grunt.file.delete('Dist/_index.html');
		grunt.option("force", false);
	},
	includeHeadTags: function (content,o2content,tag){
		var pattern = /<head[^>]*>((.|[\n\r])*)<\/head>/im;
		var array_matches = pattern.exec(content);
		var head = array_matches[1];
		var re = new RegExp('<' + tag + '[\s\S]*?>[\s\S]*?<\/'+ tag +'>','g');
		var tagArray = head.match(re);
		if(tagArray)
		{
			o2content = o2content.replace(/\r?\n|\r/g,'');
			for(var a =0; a < tagArray.length; a++){
				o2content =  o2content.replace('</head>',tagArray[a]);
			}
		}
		return o2content;
	},
	register: function () {
		grunt.registerTask('serve',this.runServer.bind(this));
		grunt.registerTask('injectContent',this.injectContent.bind(this));
		grunt.registerTask('dev',['clean:dist', 'env:dev', 'sass', 'concat:dev','copy:assets','flex','copy:baseHTML','preprocess:dev','bake-and-format','inject','injectContent','concurrent:dev']);
	}
};

module.exports = Task.init.bind(Task);
