// 获取无参URL
function urlDel() {
  var url = window.location.href;  // 动态获取网页路由
  if(ur.indexOf("?") != -1) {
    ur1 = ur.split("?")[0];
    return ur1;
  }
}