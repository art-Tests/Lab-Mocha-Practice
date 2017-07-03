var gulp = require('gulp')
var chai = require('chai')
var mocha = require('gulp-mocha')
var karma = require('karma');

gulp.task('default', ['test'], function () {
  console.log('My Default Task')
})

gulp.task('test',['testlab01','testlab02'],function(){})

gulp.task('karma',['testall'], function (done) {
  karma.server.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});


gulp.task('testlab01',function () {
  console.log('Run Unit Test LAB01 With Mocha')
  return gulp.src(['lab01/test/test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'report',
        reportFilename: 'lab01',
        reportTitle: 'Test01Report'
        // inlineAssets: true
      },
      globals: {
        should: require('chai')
      }
    }))
})

gulp.task('testlab02', function () {
  console.log('Run Unit Test LAB02 With Mocha')
  return gulp.src(['lab02/test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'report',
        reportFilename: 'lab02',
        reportTitle: 'Test02Report'
        // inlineAssets: true
      },
      globals: {
        should: require('chai')
      }
    }))
})


gulp.task('testall', function () {
  console.log('Run All Unit Test With Mocha')
  return gulp.src(['lab01/test/test.js','lab02/test.js'], { read: false })
    .pipe(mocha({
      reporter: 'mochawesome',
      reporterOptions: {
        reportDir: 'report',
        reportFilename: 'all',
        reportTitle: 'All Unit Test Report'
        // inlineAssets: true
      },
      globals: {
        should: require('chai')
      }
    }))
})

