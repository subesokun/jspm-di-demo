'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Define the configuration for all the tasks
  grunt.initConfig({
    traceur: {
      options: {
        experimental: true,
        modules: 'instantiate'
      },
      app: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.js'],
          dest: 'build'
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('build', [
    'traceur:app'
  ]);

  grunt.registerTask('serve', [
    'connect:server'
  ]);

};
