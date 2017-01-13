require('shelljs/global');
var grunt;
var Task = {
  options: null,
  init: function(_grunt, _options)
  {
    grunt = _grunt;
    this.options = _options;
    this.register();
    return this.getConfig();
  },
  getConfig: function()
  {
    return {
      tasks:
      {

      }
    };
  },
    
  register: function()
  {
    grunt.registerTask('dist', ['clean:dist', 'env:release', 'sass', 'concat:release', 'copy:assets', 'cssmin', 'uglify:release', 'copy:baseHTML', 'preprocess:release', 'bake-and-format', 'injectContent', 'clean:release']);

    grunt.registerTask('release', ['dist']);
  }
};

module.exports = Task.init.bind(Task);

