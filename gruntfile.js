'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    clean:['build/'],
    concat:{
      allJavaScript:{
        options:{
          sourceMap: true
        },
        src:['src/js/inventory.module.js', 'src/js/**/*.js'],
        dest: 'build/js/app.js'
      }
    },
    babel:{
      allJavaScript:{
        options:{
          presets:['es2015'],
          sourceMap: true
        },
        files:{
          'build/js/app.js':'build/js/app.js'
        }
      }
    },
    karma:{
      testAngular:{
        options:{
          frameworks:['mocha', 'chai'],
          browsers:['Chrome'],
          singleRun:true,
          preprocessors:{
            'src/js/**/*.js':['coverage']
          },
          reporters:['dots', 'coverage'],
          coverageReporter:{
            type:'text-summary'
          },
          files:[
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/inventory.module.js',
            'src/js/**/*.js',
            'test/**/**.spec.js'
          ]
        }
      }
    },
    copy:{
      allHtml:{
        files:[
          {
            cwd:'src',
            src:['*.html'],
            dest:'build/',
            expand: true
          }
        ]
      },
      allImages:{
        files:[
          {
            cwd:'src/images',
            src:['*.png'],
            dest:'build/images/',
            expand: true
          }
        ]
      }
    },
    sass:{
      allSASS:{
        files:{
          'build/style.css' : 'src/sass/main.scss'
        }
      }
    },
    jshint:{
      source:{
        options:{
          jshintrc:'.jshintrc'
        },
        files:{
          src:['src/**/*.js']
        }
      }
    }

  });
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['jshint', 'karma', 'clean', 'concat', 'babel', 'copy', 'sass']);
};
