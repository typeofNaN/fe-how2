// 图片悬浮鼠标经过放大
var $picWidth = $(".pic").width();
var $picHight = $(".pic").height();
var $picWidth2 = $picWidth + 18;
var $picHight2 = $picHight + 12;

$(".pic").hover(function () {
  $(this).stop().animate({ height: $picHight2, width: $picWidth2, left: "-9px", top: "-6px" }, 400);
}, function () {
  $(this).stop().animate({ height: $picHight, width: $picWidth, left: "0px", top: "0px" }, 400);
});