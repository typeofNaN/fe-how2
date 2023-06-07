// <script src="@Url.Content("http://api.map.baidu.com/api?v=2.0&ak=RPLo6rGFK671usuzSrxQ1H5dzwlbE8HG")"></script>
var map = new BMap.Map("allMap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(116.022, 28.693), 16);    // 初始化地图,设置中心点坐标和地图级别
// 添加地图类型控件
map.addControl(new BMap.MapTypeControl({
  mapTypes: [
    BMAP_NORMAL_MAP,
    BMAP_HYBRID_MAP
  ]
}));
map.setCurrentCity("南昌");    // 设置地图显示的城市
map.enableScrollWheelZoom(true);    // 开启鼠标滚轮缩放
map.enableKeyboard();    // 开启键盘控制方向
map.enableContinuousZoom();    // 开启连续缩放效果
map.enableInertialDragging();    // 开启惯性拖拽效果