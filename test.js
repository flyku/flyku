/**
 * 转换合成以后的js代码中图片的路径，将相对于js文件的路径转换为相对于主页的路径
 * 如：
 * src/template
 *  -a.js  <img src='./b.jpg'>
 *  -b.jpg
 * 转换后：
 *  -a.js  <img src='src/template/b.jpg'>
 */
var alterImgPath = function (code) {
    var imgreg = /<(img)\s+[\s\S]*?["'\s\w\/]>\s*/ig;
    code = code.replace(imgreg, function (m) {
        var getSrc = m.match(/(?:\ssrc\s*=\s*)(['"]?)([^'"\s]*)\1/);
        if (getSrc[2].indexOf('http') === 0 ||//网上的资源，直接返回，不处理
            getSrc[2] === '') {//空的图片地址不处理
            return m;
        }
        return m.replace(getSrc[2], 'hha');
    });
    console.log(require('path').join('src/template', 'good','../g.jpg'));
};
alterImgPath("<img src='./b.jpg'>ddgasdg al;g asdgsdg;; asdgasdga;")
var require=function(){};

require('template/game-item');