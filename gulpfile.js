'use strict';

var fs = require('fs');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var exit = require('gulp-exit');
var rev = require('gulp-rev');
var htmlReplace = require('gulp-html-replace');
var revReplace = require('gulp-rev-replace');
var notifier = require('node-notifier');
var rename = require('gulp-rename');
var marked = require('marked');

////////////////////////////////////////////////////////////////////////////////
//--------------------------- Variables --------------------------------------//
//----------------------------------------------------------------------------//

// The package.json
var pkg;

////////////////////////////////////////////////////////////////////////////////
//------------------------- Helper functions ---------------------------------//
//----------------------------------------------------------------------------//

function readMarkdown () {
  var path = 'app/content';
  var replace = {};
  var files = fs.readdirSync(path).filter(function(a) {
    return a.slice(-3) === '.md';
  }).forEach(function(a) {
    replace[a.slice(0,-3)] = marked(fs.readFileSync(path + '/' + a, 'utf8'));
  });
  return replace;
}

function readPackage () {
  pkg = JSON.parse(fs.readFileSync('package.json'));
}
readPackage();

////////////////////////////////////////////////////////////////////////////////
//------------------------- Callable tasks -----------------------------------//
//----------------------------------------------------------------------------//

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('serve', ['vendorScripts', 'javascript', 'styles', 'fonts', 'markdown'], function () {
  browserSync({
    port: 3000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/node_modules': './node_modules'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/index.html',
    'app/assets/graphics/**/*',
    '.tmp/assets/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/assets/styles/**/*.scss', ['styles']);
  gulp.watch('app/assets/fonts/**/*', ['fonts']);
  gulp.watch(['app/content/*.md', 'app/app.html'], ['markdown']);
  gulp.watch('package.json', ['vendorScripts']);
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('build', ['javascript', 'vendorScripts'], function () {
  gulp.start(['markdown', 'html', 'images', 'fonts', 'extras'], function () {
    return gulp.src('dist/**/*')
      .pipe($.size({title: 'build', gzip: true}))
      .pipe(exit());
  });
});

////////////////////////////////////////////////////////////////////////////////
//------------------------- Browserify tasks ---------------------------------//
//------------------- (Not to be called directly) ----------------------------//
//----------------------------------------------------------------------------//

// Compiles the user's script files to bundle.js.
// When including the file in the app.html we need to refer to bundle.js not
// main.js
gulp.task('javascript', ['config'], function() {
  var watcher  = watchify(browserify({
    entries: ['./app/assets/scripts/main.js'],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  function bundler() {
    if (pkg.dependencies) {
      watcher.external(Object.keys(pkg.dependencies));
    }
    return watcher.bundle()
      .on('error', function (e) {
        notifier.notify({
          title: 'Oops! Browserify errored:',
          message: e.message
        });
          console.log('Sass error:', e);
          // Allows the watch to continue.
          this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      // Source maps.
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp/assets/scripts'))
      .pipe(reload({stream: true}));
  }

  watcher
  .on('log', gutil.log)
  .on('update', bundler);

  return bundler();
});

// Vendor scripts. Basically all the dependencies in the package.js.
// Therefore be careful and keep the dependencies clean.
gulp.task('vendorScripts', function() {
  // Ensure package is updated.
  readPackage();
  var vb = browserify({
    debug: true,
    require: pkg.dependencies ? Object.keys(pkg.dependencies) : []
  });
  return vb.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp/assets/scripts/'))
    .pipe(reload({stream: true}));
});


////////////////////////////////////////////////////////////////////////////////
//--------------------------- Helper tasks -----------------------------------//
//----------------------------------------------------------------------------//

gulp.task('styles', function () {
  return gulp.src('app/assets/styles/main.scss')
    .pipe($.plumber(function (e) {
      notifier.notify({
        title: 'Oops! Sass errored:',
        message: e.message
      });
      console.log('Sass error:', e.toString());
      // Allows the watch to continue.
      this.emit('end');
    }))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'].concat(require('node-bourbon').includePaths)
    }))
    // Power to the user. Sass provides enough mixins to handle prefix.
    /*.pipe($.postcss([
      require('autoprefixer-core')({browsers: ['last 1 version']})
    ]))*/
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/assets/styles'))
    .pipe(reload({stream: true}));
});

gulp.task('config', function () {
  // If we're not on the production deployment, copy `config.staging.js` over
  // as `config.local.js` if one doesn't already exist.
  if (!fs.existsSync(__dirname + '/app/assets/scripts/config/local.js')) {
    if (!process.env.TRAVIS_BRANCH
    || process.env.TRAVIS_BRANCH !== process.env.DEPLOY_BRANCH) {
      gulp.src('app/assets/scripts/config/staging.js')
        .pipe(rename('local.js'))
        .pipe(gulp.dest('app/assets/scripts/config'));
    }
  }
});

gulp.task('markdown', function() {
  var replace = readMarkdown();
  return gulp.src('app/app.html')
    .pipe(htmlReplace(readMarkdown(), {
      keepUnassigned: true,
      keepBlockTags: true
    }))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('app'));
});

gulp.task('html', ['styles'], function () {
  var assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});
  return gulp.src(['app/app.html', 'app/index.html'])
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(revReplace())
    //.pipe($.if('app.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/assets/graphics/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    })))
    .pipe(gulp.dest('dist/assets/graphics'));
});

gulp.task('fonts', function () {
  return gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('.tmp/assets/fonts'))
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/**/*',
    '!app/app.html',
    '!app/index.html',
    '!app/assets/graphics/**',
    'app/assets/vendor/**',
    '!app/assets/styles/**',
    '!app/assets/scripts/**'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});
