// 解析url
var url = window.location.href;  // 动态获取网页路由

function url2json(url) {
  var index = -1,
    str = '',
    arr = [],
    length = 0,
    res = {};
  if (url.indexOf('?') != -1) {
    index = url.indexOf('?');
    str = url.substring(index + 1);
    arr = str.split('&');
    length = arr.length;
    for (var i = 0; i < length - 1; i++) {
      res[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
  }
  else {
    res = {};
  }
  return res;
};

var result = url2json(url);

// 获取json的键值对条数
var length = 0;
for (var i in result) {
  length++;
}

// 在页面输出
var list = 0;
document.write('{<br>');
for (var name in result) {
  list++;
  (list == length) ? document.write('' + name + ':' + result[name] + '<br>') : document.write('' + name + ':' + result[name] + ',<br>');
}
document.write('}' + '<br>');