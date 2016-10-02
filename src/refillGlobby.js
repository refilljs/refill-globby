'use strict';

var globby = require('globby');

function refillGlobby(globs, filesNotFoundMessage, options) {

  return new Promise(function (resolve, reject) {

    globby(globs, options).then(function(paths) {
      if (paths.length === 0) {
        reject(filesNotFoundMessage);
        return;
      }
      resolve(paths);
    }, reject);

  });

}

module.exports = refillGlobby;
