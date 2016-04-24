/**
*
* Gulpfile for strman
*
* @author Daniel Leite de Oliveira <dleitee@gmail.com>
*
*/
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import babelify from 'babelify';
import es6ify from 'es6ify';
import deglobalify from 'deglobalify';
import source from 'vinyl-source-stream';
import babel from 'gulp-babel';

gulp.task('browserify', () => {
  browserify({
    entries: './src/strman.js',
    transform: [babelify, es6ify, deglobalify],

    // Generate a UMD bundle for the supplied export name.
    // This bundle works with other module systems and sets the name
    // given as a window global if no module system is found.
    standalone: '_s',

    // Enable source maps that allow you to debug your files
    // separately.
    debug: true
  })
  .bundle()
  .pipe(source('strman.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('dist'));
});

gulp.task('babel', () => {
  gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('transpiler'));
});

gulp.task('default', ['browserify', 'babel'], () => {});
