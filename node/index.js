'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = fullScreenChange;
var evs = ['webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'MSFullscreenChange'];

function fullScreenChange(fn) {
  evs.forEach(function (e) {
    return document.addEventListener(e, fn, false);
  });
  return function () {
    evs.forEach(function (e2) {
      return document.removeEventListener(e2, fn, false);
    });
  };
}

module.exports = exports['default'];

