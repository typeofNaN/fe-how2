// 判断终端类型
function judgeType() {
  var userAgent = window.navigator.userAgent;
  (userAgent.indexOf("Android") > 0 || userAgent.indexOf("iPhone") > 0 || userAgent.indexOf("iPad") > 0) ? type = '移动端' : type = 'PC端';
  return type;
}

// 判断客户端操作系统
function judgeOS() {
  var osUserAgent = navigator.userAgent;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");

  if (isMac) return "Mac";
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return "Unix";
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return "Linux";
  if (isWin) {
    var isWin2K = osUserAgent.indexOf("Windows NT 5.0") > -1 || osUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return "Win2000";
    var isWinXP = osUserAgent.indexOf("Windows NT 5.1") > -1 || osUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return "WinXP";
    var isWin2003 = osUserAgent.indexOf("Windows NT 5.2") > -1 || osUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return "Win2003";
    var isWinVista = osUserAgent.indexOf("Windows NT 6.0") > -1 || osUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return "WinVista";
    var isWin7 = osUserAgent.indexOf("Windows NT 6.1") > -1 || osUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return "Win7";
    var isWin7 = osUserAgent.indexOf("Windows NT 6.2") > -1 || osUserAgent.indexOf("Windows 8") > -1;
    if (isWin7) return "Win8";
    var isWin7 = osUserAgent.indexOf("Windows NT 6.4") > -1 || osUserAgent.indexOf("Windows NT 10.0") > -1 || osUserAgent.indexOf("Windows 10") > -1;
    if (isWin7) return "Win10";
  }
  return "other";
}

// 判断客户端浏览器
function judgeBrowser() {
  var isFirefox = false,
    isEdge = false,
    isIE = false,
    is360 = false,
    isChrome = false;

  var broName = '',
    str = '',
    strStart = 0,
    strStop = 0,
    arr = new Array(),
    temp = '',
    type = '';

  var userAgent = window.navigator.userAgent;
  //FireFox
  if (userAgent.indexOf('Firefox') != -1) {
    isFireFox = true;
    broName = 'Firefox浏览器';
    strStart = userAgent.indexOf('Firefox');
    temp = userAgent.substring(strStart);
    broName = temp.replace('/', '版本号')
  }
  //Edge
  if (userAgent.indexOf('Edge') != -1) {
    isEdge = true;
    broName = 'Edge浏览器';
    strStart = userAgent.indexOf('Edge');
    temp = userAgent.substring(strStart);
    broName = temp.replace('/', '版本号');
  }
  //IE浏览器
  if (userAgent.indexOf('NET') != -1 && userAgent.indexOf("rv") != -1) {
    isIE = true;
    broName = 'IE浏览器';
    strStart = userAgent.indexOf('rv');
    strStop = userAgent.indexOf(')');
    temp = userAgent.substring(strStart, strStop);
    broName = temp.replace('rv', 'IE').replace(':', '版本号');
  }
  //360极速模式区分360安全浏览器和360极速浏览器
  if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") < 0 && userAgent.indexOf("Firefox") < 0) {
    is360 = true;
    (navigator.javaEnabled()) ? broName = '360安全浏览器-极速模式' : broName = '360极速浏览器-极速模式';
  }
  //360兼容
  if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") != -1 && userAgent.indexOf("MSIE") != -1 && userAgent.indexOf("rv") < 0) {
    is360 = true;
    broName = '360兼容模式';
  }
  //Chrome浏览器
  if (userAgent.indexOf('WOW') < 0 && userAgent.indexOf("Edge") < 0) {
    isChrome = true;
    broName = 'Chrome浏览器';
    strStart = userAgent.indexOf('Chrome');
    strStop = userAgent.indexOf(' Safari');
    temp = userAgent.substring(strStart, strStop);
    broName = temp.replace('/', '版本号');
  }
  return broName;
}

// 获取客户端IP
function getIP() {
  // 获取IP和所在城市
  // var getIP = returnCitySN["cip"] + ',' + returnCitySN["cname"];
  // 获取IP
  var getIP = returnCitySN["cip"];

  return getIP;
}

// 获取客户端分辨率
function getDPI() {
  var DPI = window.screen.width + 'X' + window.screen.height;
  return DPI;
}