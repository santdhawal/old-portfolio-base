require('shelljs/global');
var grunt;
var Task = {
    options: null,
    init: function(_grunt, _options) {
        grunt = _grunt;
        this.options = _options;
        this.register();
        return this.getConfig();
    },
    getConfig: function() {
        return {
            tasks: {
                postcss: {
                    options: {

                        processors: [
                            require('postcss-flexibility')()
                        ]
                    },
                    dist: {
                        src: 'dist/assets/css/main.css'
                    }
                }
            }
        };
    },
    register: function() {
        grunt.registerTask('flex', ['postcss']);
    }
};

module.exports = Task.init.bind(Task);
