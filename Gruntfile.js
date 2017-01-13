var grunt;
var GruntMain = {
  OPTIONS: {
    config : {
      src : "Dev/grunt/task/**/*.js"
    }
  },
  init: function (_grunt) {
    grunt = _grunt;
    require('load-grunt-tasks')(grunt);
    this.setConfig();
  },
  setConfig: function () {
    var configs = require('load-grunt-configs')(grunt,this.OPTIONS);
    grunt.initConfig(configs);
  },
  register: function (){
    grunt.registerTask('default', []);
  }
};
module.exports = GruntMain.init.bind(GruntMain);
