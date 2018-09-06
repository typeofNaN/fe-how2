var $carousel = $("#carousel");// 获取元素
var $imgLis = $("#carousel .imgs ul li");// 获取li
var $circles = $("#circles ol li");// 获取小圆点
var $leftBtn = $("#leftBtn");
var $rightBtn = $("#rightBtn");
var amount = $circles.length;// 数量
var timer = setInterval(rightBtnFun, 3000);// 定时器

// 鼠标进入carousel 停止
$carousel.mouseenter(function() {
  clearInterval(timer);// 停止timer
});

// 鼠标离开重新开启
$carousel.mouseleave(function() {
  clearInterval(timer);// 设表先关
  timer = setInterval(rightBtnFun, 3000);// 重新开启
});

// 信号量
var idx = 0;
// 右按钮点击事件
// 左右按钮防流氓 图片不运动才接收新任务
// 可以将匿名函数提取 将函数名书写在小括号
$rightBtn.click(rightBtnFun);
// rightBtnFun();
// 声明右按钮点击事件
function rightBtnFun() {
  // 图片在运动，什么事情都不做
  if($imgLis.is(":animated")) {
    return;
  }
  // 图片不运动，才会执行这些语句
  // 老图消失
  $imgLis.eq(idx).fadeOut(800);
  // 信号量改变
  idx ++;
  // 验证
  if(idx > amount - 1) {
    idx = 0;
  }
  // 新图淡入
  $imgLis.eq(idx).fadeIn(1000);
  // 小圆点改变
  $circles.eq(idx).addClass("cur").siblings().removeClass("cur");
}

// 左按钮点击事件
$leftBtn.click(function() {
  // 图片在不运动才接收新任务
  if(!$imgLis.is(":animated")) {
    // 老图淡入
    $imgLis.eq(idx).fadeOut(800);
    // 信号量改变
    idx --;
    if(idx < 0) {
      idx = amount - 1;
    }
    // 新图淡入
    $imgLis.eq(idx).fadeIn(1000);
    // 小圆点改变
    $circles.eq(idx).addClass("cur").siblings().removeClass("cur");
  }
});

// 小圆点鼠标进入事件
// 防流氓 立即触发
$circles.click(function() {
  // 老图淡出
  $imgLis.eq(idx).stop(true).fadeOut();
  // 信号量改变 $(this)触发 的小圆点
  idx = $(this).index();
  // 新图淡入
  $imgLis.eq(idx).stop(true).fadeIn(1000);
  // 小圆点改变
  $(this).addClass("cur").siblings().removeClass("cur");
});