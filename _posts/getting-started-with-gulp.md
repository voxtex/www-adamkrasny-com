---
title: "Getting started with Gulp"
date: "2014-04-12T00:00:00.000Z"
---

# Getting started with Gulp

This is the first in a short series about setting up a sane gulpfile that works for development and production.

Having recently switched from Grunt, I find Gulp to be easier to use and maintain, and I want to share what I’ve learned so far.

## Initial setup

This guide assumes you already have [nodejs](http://nodejs.org/) installed. There should also be a ‘package.json’ in your root application directory, which can be created using `npm init`. From there, gulp should be installed globally using npm `install -g gulp` and inside of our project dependencies using `npm install --save-dev gulp`.

Our first gulpfile will be simple and I will use it to introduce several important plugins.

## Plugins

Install the following gulp plugins using npm `npm install --save-dev <plugin>`

[gulp-changed](https://github.com/sindresorhus/gulp-changed) - Run tasks on changed files only.  
[gulp-clean](https://github.com/peter-vilja/gulp-clean) - Clean up build artifacts.  
[gulp-connect](https://github.com/avevlad/gulp-connect) - Development http server with live reload.  
[gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Easily load all gulp plugins.  
[gulp-open](https://github.com/stevelacy/gulp-open) - Open browser automatically.  
[gulp-plumber](https://github.com/floatdrop/gulp-plumber) - Monkey patch to fix stream piping being stopped by errors. Useful for development.  
[run-sequence](https://github.com/OverZealous/run-sequence) - As of today, this functionality still doesn’t seem to be implemented in gulp. Check out https://github.com/orchestrator/orchestrator/issues/21 for more information.  
[lodash](http://lodash.com/) - Some utility functions. Also an awesome library.

## File structure

There is an assumption about file structure. My app structure is diagramed below, adjust your gulpfile accordingly.

```
app/
    views/
    scripts/
    styles/
    images/
    index.html
build/
gulpfile.js
package.json
```

## Gulpfile

```javascript
var gulp = require("gulp"),
  lp = require("gulp-load-plugins")(), // automatically load our plugins
  _ = require("lodash");
```

Start by requiring the plugins and modules we need. gulp-load-plugins will load plugins and return an object that contains them. For example, gulp-changed will be assigned to `lp.changed`, the ‘gulp-’ prefix is removed automatically.

## Utility functions

```javascript
function join(p1, p2) {
  if (_.isArray(p2)) {
    return _.map(p2, _.partial(join, p1));
  }
  return path.join(p1, p2 || "");
}

var appPath = _.partial(join, "app");
var buildPath = _.partial(join, "build");
```

I like to write some helper functions for easy path creation. Take advantage of the path module in node, along with lodash’s ability to partially apply functions. join is now a function that takes a path, p1, and can join it with either an array of paths (in which case it will be mapped to each one) or a single path.

`appPath()` and `buildPath()` can be used to easily set up configuration settings. The views, for example, would be located at `appPath('views')` which evaluates to ‘app/views’.

## Configuration

```javascript
var config = {
  httpPort: '9000',

  // views
  srcViews: appPath('views/**/*.html'),
  destViews: buildPath('views/'),
  srcIndex: appPath('index.html'), // this will be more useful in the future

  // styles
  srcStyles: appPath('styles/**/*.css'),
  destStyles: buildPath('styles'),

  // scripts
  srcScripts: appPath(['scripts/*.js', 'scripts/*/*.js', 'scripts/**/*.js']) // There is reason to this madness, will explain.
  destScripts: buildPath('scripts'),

  // images
  srcImages: appPath('images/**/*'), // supply extensions if you desire
  destImages: buildPath('images'),
};
```

An object to hold all build configuration. This is pretty straightforward, but we want to define all inputs and outputs so they can be changed from one place.

You may notice srcScripts seems unnecessarily complex. This is just to process files in a specific order. While it doesn’t matter now, this will be useful in the future. Scripts in ‘app/scripts’ first, all subdirectories in ‘app/scripts’, and then the remaining directories recursively.

## Build tasks

```javascript
gulp.task("styles", function () {
  return gulp
    .src(config.srcStyles)
    .pipe(lp.plumber())
    .pipe(lp.changed(config.destStyles))
    .pipe(gulp.dest(config.destStyles))
    .pipe(lp.connect.reload());
});

gulp.task("scripts", function () {
  return gulp
    .src(config.srcScripts)
    .pipe(lp.plumber())
    .pipe(lp.changed(config.destScripts))
    .pipe(gulp.dest(config.destScripts))
    .pipe(lp.connect.reload());
});

gulp.task("images", function () {
  return gulp
    .src(config.srcImages)
    .pipe(lp.plumber())
    .pipe(lp.changed(config.destImages))
    .pipe(gulp.dest(config.destImages))
    .pipe(lp.connect.reload());
});

gulp.task("views", function () {
  return gulp
    .src(config.srcViews)
    .pipe(lp.plumber())
    .pipe(lp.changed(config.destViews))
    .pipe(gulp.dest(config.destViews))
    .pipe(lp.connect.reload());
});

gulp.task("index", ["styles", "scripts"], function () {
  return gulp.src(config.srcIndex).pipe(lp.plumber()).pipe(gulp.dest(buildPath())).pipe(lp.connect.reload());
});
```

All of our basic build tasks come next. The second argument when defining a task can be an array of dependencies. Here, the ‘index’ task depends on ‘styles’ and ‘scripts’. These two tasks will be executed concurrently before the main task, ‘index’, gets run. This comes in handy with more complex gulpfiles.

A few interesting plugins are being used here.
[gulp-plumber](https://github.com/floatdrop/gulp-plumber), used as `lp.plumber()`, prevents our tasks from stopping when an error occurs. Without this gulp would die if an error occurred in one of the tasks invoked by a watch. Some tasks, such as Sass compilation, simply need to be rerun and aren’t fatal. This eases the development process by preventing interruptions.

The live-reload feature of [gulp-connect](https://github.com/avevlad/gulp-connect). You can pipe files to `lp.connect.reload()` and trigger gulp-connect to send a live-reload message to the browser. This message will only contain the piped files.

[gulp-changed](https://github.com/sindresorhus/gulp-changed), will compare piped files to the specified output path, and filter out all files that haven’t changed. It optimizes the build process in development by not rebuilding files that have remained the same.

`gulp.dest()` is built into gulp and simply writes the piped files to disk.

## Cleanup

```javascript
gulp.task("clean", function () {
  return gulp.src(buildPath(), { read: false }).pipe(lp.clean());
});
```

gulp-clean will delete our ‘build/’ directory. By passing {read: false} to `gulp.src()`, we tell gulp that we don’t want to read the content of the files. File names are enough to delete a file.

## Watching for changes

```javascript
gulp.task("watch", function () {
  gulp.watch(config.srcStyles, ["styles"]);
  gulp.watch(config.srcViews, ["views"]);
  gulp.watch(config.srcImages, ["images"]);
  gulp.watch(config.srcScripts, ["scripts"]);
  gulp.watch(config.srcIndex, ["index"]);
});
```

watch is built into gulp. It will monitor files for changes, and execute one or more tasks. Our tasks watches all project files and runs the rebuild tasks when they are altered.

## Building

```javascript
gulp.task("build", ["clean"], function (cb) {
  runSequence(["index", "images", "views"], cb);
});
```

build is a collection of tasks. First it will run ‘clean’, then it will run ‘index’, ‘images’, and ‘views’ concurrently. This builds everything we need to have a working version of the application in ‘build/’.

## Starting a server

```javascript
gulp.task("server", function () {
  lp.connect.server({
    root: buildPath(),
    port: config.httpPort,
    livereload: true,
  });
});
```

server will start up the [gulp-connect](https://github.com/torifat/gulp-connect-multi) http server and use the ‘build/’ directory to serve files.

## Wrapping it all up

```javascript
gulp.task("default", ["build"], function (cb) {
  runSequence("server", "watch", cb);
});
```

Finally, the ‘default’ task will build and start a server automatically. It can be run by simply typing `gulp`.

`run-sequence()` let’s us ensure that ‘server’ and ‘watch’ are executed sequentially. The key difference from the first time we saw it is passing an array of strings, as opposed to multiple string parameters. While not currently possible in Gulp, this feature seems to be on the roadmap as seen here https://github.com/orchestrator/orchestrator/issues/21.

All tasks can be executed independently using `gulp <taskname>`.

That should be enough to get you going. The final result should look something like this.

https://gist.github.com/voxtex/11239483

The following comments are inevitable, so I will respond before they come up.

> There’s no point to copying the files, they aren’t modified.

Correct. It serves no purpose right now, but eventually we will be compiling from Sass and Slim, and performing minification and concatenation. We need to ouput the processed files to some isolated directory.

> There’s no point in using runSequence() for the build task, as those items are concurrent anyway.

Also correct. They could simply be defined as dependencies on the task. It was more to illustrate usage of runSequence(), and will be important later on.

In future posts, I will work on building out the tasks to include typical web development functionality. Sass, Slim, JSHint, and minification will be included along with a bit more.

If you have any suggestions or improvements be sure to comment and let me know.
