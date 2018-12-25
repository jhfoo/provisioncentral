const {
    series,
    // parallel,
    src,
    // dest,
    watch
} = require('gulp'),
    eslint = require('gulp-eslint'),
    spawn = require('child_process').spawn;

var child = null;

// ref: https://gist.github.com/webdesserts/5632955
function startApp() {
    if (child) {
        child.kill();
    }
    console.log('Starting app...');
    child = spawn('npm', ['run', 'server'], {
        stdio: 'inherit'
    });
    child.on('close', (code) => {
        console.log('PROCESS CLOSING: code ' + code);
    });
}

function lintmyself() {
    return src('./*.js')
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
};

function lint() {
    return src('src/**')
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
};

watch(['*.js', 'src/**'], series(lintmyself, lint, startApp));

exports.default = series(lintmyself, lint, startApp);