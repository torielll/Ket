module.exports = function(grunt) {
 
  require('time-grunt')(grunt);
 
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
 }
const mozjpeg = require('imagemin-mozjpeg');

grunt.initConfig({
    imagemin: {
        static: {
            options: {
                optimizationLevel: 3,
                svgoPlugins: [{removeViewBox: false}],
                use: [mozjpeg()] // Example plugin usage 
            },
            files: {
                'images/*.png': 'images/*.png',
                'images/*.jpg': 'images/*.jpg',
                'images/*.gif': 'images/*.gif'
            }
        },
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/'
            }]
        }
    }

     sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: '../public',
        ext: '.css'
      }]
    }
  }

   grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['watch']); 
});


