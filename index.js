/*!
 * study-marking-201709.
 * Copyright(c) 2017 ryoichi-obara
 * MIT Licensed
 */
'use strict';

const SUFFIX = '=?';

module.exports.isAvailable = function(message) {
  var found = message.lastIndexOf(SUFFIX);
  return (found != -1 && found == message.length - SUFFIX.length);
}

module.exports.extract = function(message) {
  return message.substr(0, message.length - SUFFIX.length);
}

module.exports.evalExpression = function(message) {
  return eval(message);
}
