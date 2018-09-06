function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  // 创建放大镜
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  // 插入放大镜 
  img.parentElement.insertBefore(glass, img);

  // 为放大镜设置背景属性
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  // 将放大镜移动到图像上时，执行函数
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  // 适用于触摸屏
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    // 防止在移动图像时可能发生的任何其他操作
    e.preventDefault();
    // 获取光标的x和y位置
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    // 防止放大镜被放置在图像的外部
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < w / zoom) { x = w / zoom; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < h / zoom) { y = h / zoom; }
    // 设置放大镜的位置
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    // 展示放大镜“看到的东西”
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    // 得到图像的x和y位置
    a = img.getBoundingClientRect();
    // 相对于图像，计算光标的x和y坐标
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    // 考虑任何页面滚动
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}

window.onload = function () {
  // 执行放大功能
  magnify("myimage", 3);    // 指定图像的id和放大镜的强度
}