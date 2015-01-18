module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      jshint: {
        src: [ 'src/**/*.js' ],
        options: { 
          eqeqeq: true ,
          smarttabs:true , 
          laxcomma:true , 
          laxbreak:true ,
          // Reporter options control output to file
          // reporter: 'jslint' ,
          reporter: 'reporter.js',
          reporterOutput: 'jshint.html' ,

          // NOTE: you can exclude dirs using ignores option (see below)
          // files in js/libs and its subdirs will NOT be scanned
          //ignores: [ 'js/libs/**/*.js'] , 
          
          // use this option with care
          force:true   
        }
      },
      nodemailer: {
        options: {
          transport: {
            type: 'SMTP',
            options: {
              service: 'Gmail',
              auth: {
                user: 'palaniscript@gmail.com',
                pass: 'mybdi4$an'
              }
            }
          },
          message: {
            subject: 'Js Hint Reporter'
          },
          from: 'Js Hint Service ✔ <foo@blurdybloop.com>',
          recipients: [
            {
              email: 'mailtopalanii@gmail.com',
              name: 'Palanisamy T'
            }
          ]
        },
        inline: { src: ['jshint.html'] }
      }
  });

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-nodemailer');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'nodemailer']);
};