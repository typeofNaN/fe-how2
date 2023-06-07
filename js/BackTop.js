!function ($) {
  // 此处 $ 是 window 对象！

  // 获取 backTop 对象
  var backTop = $.document.getElementsByClassName('backTop')[0];

  // 监听滑块事件 
  $.addEventListener('scroll', function () {
    ($.scrollY > 0) ?
      backTop.classList.add('top') :   // 添加 active 类
      backTop.classList.remove('top'); // 删除 active 类
  }, false);

  // 为 backTop 对象添加点击事件
  backTop.addEventListener('click', function () {
    var x = $.scrollX;
    var y = $.scrollY;

    var interval = $.setInterval(function () {
      (y > 0) ? y = y - 150 : $.clearInterval(interval); // 清除计时器
      $.scrollTo(x, y);
    }, 3); // 0.003s
  }, true);  // true 捕获阶段执行 
}(window);