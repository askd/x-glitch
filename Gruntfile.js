module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'smush-components': {
      options: {
        fileMap: {
          js: 'demo/x-tag-components.js',
          css: 'demo/x-tag-components.css'
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-smush-components');

  grunt.registerTask('build', ['smush-components']);

};
