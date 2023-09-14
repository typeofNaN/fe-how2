// <script src="@Url.Content("~/Scripts/jquery.fly.min.js")"></script>
// 点击加入购物车按钮商品飞入购物车
$(function () {
  $(".add-to-cart").click(function (event) {
    var _this = $(this);    // 获取点击元素

    // 获取购物车位置
    var cartLeft = $(".cart").offset().left;    // 获取.cart距离屏幕顶端的距离
    var cartTop = $(".cart").offset().top - $(document).scrollTop();    // 获取.cart的y坐标(因为fly插件的start开始位置是根据屏幕可视区域x，y来计算的，而不是根据整个文档的x，y来计算的)

    // 获取商品图片位置
    var imgLeft = $(".commodity-img").offset().left;
    var imgTop = $(".commodity-img").offset().top - $(document).scrollTop();

    // 新创建一个飞入购物车的商品图
    var addCar = $(".add-to-cart");
    var img = addCar
      .parent(".goods-info-other")
      .siblings()
      .children("div.commodity-img")
      .children("div.img-magnifier-container")
      .children("#myImage")
      .attr('src');

    var flyer = $('<img class="u-flyer" src="' + img + '">');
    event.preventDefault();    // 阻止a链接的默认行为 
    flyer.fly({
      start: {    // 开始位置
        left: imgLeft,
        top: imgTop
      },
      end: {    // 结束位置
        left: cartLeft + 35,
        top: cartTop + 35,
        width: 0,    // 结束时宽度 
        height: 0    // 结束时高度 
      },
      onEnd: function () {    // 结束回调
        this.destroy();    // 移除dom
        window.location.href = _this.attr("href");    // 定向到该元素链接地址
      }
    });
  });
})