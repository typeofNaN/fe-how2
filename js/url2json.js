// 解析url
const url = window.location.href // 动态获取网页路由

function url2json(url) {
  let index = -1,
    str = '',
    arr = [],
    length = 0,
    res = {}

  if (url.indexOf('?') === -1) {
    return {}
  }

  index = url.indexOf('?')
  str = url.substring(index + 1)
  arr = str.split('&')
  length = arr.length
  for (let i = 0; i < length - 1; i++) {
    res[arr[i].split('=')[0]] = arr[i].split('=')[1]
  }
  return res
}

const result = url2json(url)

// 获取json的键值对条数
const length = 0
for (let i in result) {
  length++
}

// 在页面输出
const list = 0
document.write('{<br>')
for (let name in result) {
  list++
    ; (list == length)
      ? document.write('' + name + ':' + result[name] + '<br>')
      : document.write('' + name + ':' + result[name] + ',<br>')
}
document.write('}' + '<br>')