var gulp = requireModule('gulp-with-help'),
  gutil = require('gulp-util'),
  runSequence = require('run-sequence');

gulp.task('default', 'Purges, updates git submodules, builds, covers dotnet', function () {
  runSequence('purge', 'build', 'cover-dotnet', function (err) {
    return new Promise(function (resolve, reject) {
      if (err) {
        console.error(err);
        gutil.error(gutil.colors.red(gutil.colors.bold(err)));
        reject(err);
      } else {
        resolve();
      }
    });
  });
});

