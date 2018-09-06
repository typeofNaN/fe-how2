// 返回顶部
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".backtop").addClass("shang");    // 当页面滚动距离大于200时，添加.shang类，使之显示
  }
  else {
    $(".backtop").removeClass("shang");    // 当页面滚动距离小于200时，删除.shang类，使之隐藏
  }
});
$(".backtop").click(function () {
  $("html,body").animate({ scrollTop: 0 }, "slow");    // 点击backtop，回到顶部
});