
// define(function(require,exports,module) {
  // 模块文件引入
  var changeText = require('./static/changeText.js');
  var newElement = require('./static/create-element.js');
  var showText = function () {
    $("#title").html(changeText.init());
  };
  module.exports = {
    showText : showText,
    newElement : newElement
  };
// });