module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        develop: {
            server: {
                file: 'app.js'
            }
        },
        regarde: {
            js: {
                files: [
                    'app.js',
                    'routes/*.js'
                ],
                tasks: ['develop', 'delayed-livereload']
            }
        },
        mochaTest: {
            files: ['test/**/*.test.js']
        },
        mochaTestConfig: {
            options: {
                reporter: 'nyan'        
            }
        }
	});
    grunt.registerTask('delayed-livereload', 'delayed livereload', function () {
        var done = this.async();
        setTimeout(function () {
            grunt.task.run('livereload');
            done();
        }, 500);
    });
	grunt.loadNpmTasks('grunt-develop');
    grunt.loadNpmTasks('grunt-regarde');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['livereload-start', 'develop', 'regarde']);
    grunt.registerTask('test', ['mochaTest']);
};
