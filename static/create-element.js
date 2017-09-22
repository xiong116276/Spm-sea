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