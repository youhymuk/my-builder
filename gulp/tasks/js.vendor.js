'use strict';

module.exports = function() {
  $.gulp.task('js:vendor', function() {
    return $.gulp.src($.path.jsVendor)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
