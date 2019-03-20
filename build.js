var gulp = require('gulp');
var msbuild = require('gulp-msbuild');
function nugetRestore() {
    return gulp.src('**/*.sln')
            .pipe(msbuild({
                toolsVersion: 14.0,
                targets: ['Clean', 'Build'],
                configuration: 'Debug',
                stdout: true,
                verbosity: 'minimal',
                errorOnFail: true,
                architecture: 'x64'
            }));
}
gulp.task('build', gulp.series(nugetRestore));


