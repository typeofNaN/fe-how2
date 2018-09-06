// 图片悬浮鼠标经过放大
var $picwidth = $(".pic").width();
var $pichight = $(".pic").height();
var $picwidth2 = $picwidth + 18;
var $pichight2 = $pichight + 12;

$(".pic").hover(function () {
  $(this).stop().animate({ height: $pichight2, width: $picwidth2, left: "-9px", top: "-6px" }, 400);
}, function () {
  $(this).stop().animate({ height: $pichight, width: $picwidth, left: "0px", top: "0px" }, 400);
});