// Put this after including our dependencies
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "scss/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "./",
    },
    html: "./*.html"

    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename");

// ... other includes
var browserSync = require("browser-sync").create();
// ...

function style() {
    return (
        gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename('ico_cabinet.min.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream())
    );
}

function vue () {
    gulp.task('js', function() {
        return browserify({ entries: 'src/js/main.js'})
          .transform(babelify, { presets: ['es2015'] })
          .transform(vueify)
          .bundle()
            .pipe(source('app.js'))
            .pipe(gulp.dest('public/js'))
            .pipe(connect.reload());
      });
}

// A simple task to reload the page
function reload() {
    browserSync.reload();
}

function watch() {
    style();
    vue();
    reload();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    gulp.watch(paths.styles.src, vue);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch(paths.html, reload);
}



// We don't have to expose the reload function
// It's currently only useful in other functions

exports.watch = watch