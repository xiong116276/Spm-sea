define("/main-debug", [], function(require, exports, module){

// define(function(require,exports,module) {
  // 模块文件引入
  var changeText = require("/static/changeText-debug");
  var newElement = require("/static/create-element-debug");
  var showText = function () {
    $("#title").html(changeText.init());
  };
  module.exports = {
    showText : showText,
    newElement : newElement
  };
// });
});
define("/static/changeText-debug", [], function(require, exports, module){
// define(function (require, exports, module) {
  var init = function () {
    var textContent = [
      'yes it works',
      'seajs demo',
      'it is a lucky day',
      'wish this help you',
      'thanks you for reading'
    ];
    
    var index = Math.floor(Math.random()*textContent.length);
    return textContent[index];
  };
  module.exports = {
    init:init
  };
// });
});
define("/static/create-element-debug", [], function(require, exports, module){
// define(function (require, exports, module) {
  var element = function (tag,attrs,html) {
    var element = document.createElement(tag);
    // 判断第二个参数是属性还是内容
    if(typeof(attrs) === "string"){
      html = attrs;
      attrs = null;
    }
    // 判断是否有属性
    if(attrs !== undefined){
      for(var attr in attrs){
        element.setAttribute(attr,attrs[attr]);
      }
    }
    // 判断是否有内容
    if(html !== undefined){
      element.innerHTML = html;
    }
    return element;
  }
  exports.element = element;
// });
});
